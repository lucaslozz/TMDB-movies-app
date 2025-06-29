# 🎬 TMDB Movies App

A modern React Native mobile application that provides a comprehensive movie browsing and discovery experience using The Movie Database (TMDB) API.

## 📱 Features

- **Movie Discovery**: Browse trending, popular, and now playing movies
- **Search**: Find movies with real-time search functionality
- **Movie Details**: Comprehensive movie information with cast and recommendations
- **Watch List**: Save and manage your favorite movies
- **Dark Theme**: Beautiful dark UI with custom design system
- **Offline Support**: Cached data for better user experience
- **Portuguese Localization**: Full Brazilian Portuguese support

## 🏗️ Architecture

### Tech Stack

- **React Native** (0.76.7) with **Expo** (SDK 52)
- **TypeScript** for type safety
- **React Navigation** for routing
- **TanStack Query** for data fetching and caching
- **Restyle** for theming and styling
- **Axios** for API communication
- **Zustand** for state management

### Project Structure

```
src/
├── api/                 # API configuration and types
├── assets/             # Icons and static assets
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── infra/              # Infrastructure (queries, constants)
├── plugins/            # Expo plugins and custom fonts
├── routes/             # Navigation configuration
├── screens/            # App screens
├── services/           # Business logic and API services
├── theme/              # Design system and theming
└── @types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd TMDB-movies-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on iOS**

   ```bash
   npm run ios
   ```

5. **Run on Android**
   ```bash
   npm run android
   ```

## 📱 App Screens

### Home Screen

- **Trending Movies**: Daily trending content from TMDB
- **Popular Movies**: Currently popular films
- Horizontal scrolling lists with "See All" functionality

### Search Screen

- Real-time movie search
- Paginated results with infinite scroll
- Search history and suggestions

### Watch List Screen

- Personal movie collection
- Add/remove movies from watch list
- Persistent storage

### Movie Details Screen

- Comprehensive movie information
- Cast and crew listings
- Movie recommendations
- Rating functionality
- Add to watch list

### All List Screen

- Paginated movie listings
- Filter and sort options
- Infinite scroll support

## 🎨 Design System

### Colors

- **Primary**: Midnight Blue (#5A5A7A)
- **Background**: Charcoal (#242A32)
- **Surface**: Dark Slate (#3A3F47)
- **Text**: White (#FFFFFF) / Gray (#92929D)

### Typography

- **Font Family**: Satoshi (Custom fonts included)
- **Weights**: Light, Regular, Medium, Bold, Black
- **Variants**: Default, headings, body text

### Spacing

- **Scale**: 4px to 56px increments
- **Common**: s8 (8px), s16 (16px), s24 (24px), s32 (32px)

### Components

- **Box**: Layout component with theme integration
- **Text**: Typography component with variants
- **Button**: Interactive buttons with presets
- **Icon**: SVG icon system
- **LoadingIndicator**: Loading states and shimmer effects

## 🔌 API Integration

### TMDB API

- **Base URL**: `https://api.themoviedb.org/3/`
- **Authentication**: JWT token-based
- **Endpoints**:
  - `/movie/now_playing` - Current movies in theaters
  - `/movie/popular` - Popular movies
  - `/trending/all/day` - Daily trending content
  - `/movie/{id}/recommendations` - Movie recommendations
  - `/movie/{id}/credits` - Cast and crew
  - `/account/{id}/watchlist` - User watch list

### Data Management

- **React Query** for efficient data fetching
- **Automatic caching** and background updates
- **Optimistic updates** for better UX
- **Error handling** and loading states

## 🛠️ Development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run on web browser
npm run lint       # Run ESLint
```

### Code Quality

- **ESLint** with Prettier integration
- **TypeScript** strict mode
- **Husky** for git hooks
- **Custom type definitions** for navigation and API

### Project Configuration

#### Expo Configuration (`app.json`)

- Custom splash screen
- Icon configuration
- Font loading
- Platform-specific settings

#### TypeScript Configuration (`tsconfig.json`)

- Strict type checking
- Path mapping for clean imports
- React Native specific settings

## 📦 Dependencies

### Core Dependencies

- `expo`: ^52.0.39
- `react`: 18.3.1
- `react-native`: 0.76.7
- `@react-navigation/native`: ^7.0.14
- `@tanstack/react-query`: ^5.67.1
- `@shopify/restyle`: ^2.4.4

### UI & Animation

- `@gorhom/bottom-sheet`: ^5
- `react-native-reanimated`: ~3.16.1
- `react-native-gesture-handler`: ~2.20.2
- `react-native-shimmer-placeholder`: ^2.0.9

### Development Dependencies

- `typescript`: ^5.3.3
- `eslint`: ^8.52.0
- `prettier`: ^3.1.0
- `@types/react`: ~18.3.12

## 🌐 Localization

- **Language**: Portuguese (Brazil)
- **Date Formatting**: Moment.js with pt-BR locale
- **Number Formatting**: Localized number formats

## 🔧 Customization

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add navigation types in `src/@types/navigation.d.ts`
3. Update navigation stack in `src/routes/AppStack.tsx`

### Adding New API Endpoints

1. Add service function in `src/services/`
2. Create query in `src/infra/queryFactory/`
3. Add query key in `src/infra/queryKeys/`

### Customizing Theme

1. Modify colors in `src/theme/theme.ts`
2. Update spacing and typography as needed
3. Add new component variants

## 🚀 Deployment

### Building for Production

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### App Store Deployment

1. Configure app.json with production settings
2. Build production bundle
3. Submit to App Store Connect / Google Play Console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [Expo](https://expo.dev/) for the development platform
- [React Navigation](https://reactnavigation.org/) for navigation
- [TanStack Query](https://tanstack.com/query) for data management
