/* eslint-disable import/order */
/* eslint-disable no-undef */

const {
  withPlugins,
  withXcodeProject,
  withAndroidManifest,
  IOSConfig,
} = require('@expo/config-plugins');

const fs = require('fs');
const path = require('path');

// Função recursiva para copiar uma pasta inteira
const copyFolderRecursiveSync = (source, target) => {
  if (!fs.existsSync(source)) {
    throw new Error(`Source folder not found at ${source}`);
  }

  // Verifica se o destino existe, se não, cria-o
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, {recursive: true});
  }

  // Copia cada item da pasta de origem para a pasta de destino
  const items = fs.readdirSync(source);
  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Se for um diretório, chama a função recursivamente
      copyFolderRecursiveSync(sourcePath, targetPath);
    } else {
      // Se for um arquivo, copia-o
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

const withConfigFile = (config, {src, iosDest, androidDest, groupName}) => {
  return withPlugins(config, [
    config => withAndroidConfigFile(config, {src, dest: androidDest}),
    config => withIOSConfigFile(config, {src, dest: iosDest, groupName}),
  ]);
};

// Function to copy files and folders to iOS
const withIOSConfigFile = (config, {src, dest, groupName}) => {
  return withXcodeProject(config, async config => {
    try {
      const sourcePath = path.resolve(__dirname, src);
      const destinationPath = path.resolve(
        config.modRequest.platformProjectRoot,
        dest,
      );

      if (!fs.existsSync(sourcePath)) {
        throw new Error(`Source folder not found at ${sourcePath}`);
      }

      // Copy the folder to the destination directory
      copyFolderRecursiveSync(sourcePath, destinationPath);

      const project = config.modResults;

      // Ensure the group exists in the Xcode project
      IOSConfig.XcodeUtils.ensureGroupRecursively(project, groupName);

      // Add each file in the folder to the group in Xcode
      const items = fs.readdirSync(sourcePath);
      items.forEach(item => {
        const itemPath = path.join(destinationPath, item);
        IOSConfig.XcodeUtils.addResourceFileToGroup({
          filepath: itemPath,
          groupName,
          isBuildFile: true,
          project,
          verbose: true,
        });
      });
    } catch (error) {
      console.error(`Error copying ${src} to iOS:`, error.message);
      throw error;
    }
    return config;
  });
};

// Função para copiar arquivos e pastas para Android
const withAndroidConfigFile = (config, {src, dest}) => {
  return withAndroidManifest(config, async config => {
    const sourcePath = path.resolve(__dirname, src);
    const destinationPath = path.resolve(
      config.modRequest.platformProjectRoot,
      dest,
    );

    try {
      // Copia a pasta para o diretório de destino
      copyFolderRecursiveSync(sourcePath, destinationPath);
    } catch (error) {
      console.error(`Error copying folder ${src} to Android:`, error.message);
      throw error;
    }

    return config;
  });
};

module.exports = withConfigFile;
