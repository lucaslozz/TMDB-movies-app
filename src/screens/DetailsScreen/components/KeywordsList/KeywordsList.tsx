import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Keyword} from '@services';

import {Box, Text} from '@components';

interface KeywordsListProps {
  keywords: Keyword[];
  title: string;
}

interface KeywordItemProps {
  keyword: Keyword;
}

function KeywordItem({keyword}: KeywordItemProps) {
  return (
    <Box
      backgroundColor="backgroundContrast"
      paddingHorizontal="s12"
      paddingVertical="s8"
      borderRadius="s16"
      marginRight="s8">
      <Text preset="paragraphSmall" color="primaryContrast">
        {keyword.name}
      </Text>
    </Box>
  );
}

export function KeywordsList({keywords, title}: KeywordsListProps) {
  if (!keywords || keywords.length === 0) {
    return null;
  }

  function renderItem({item}: ListRenderItemInfo<Keyword>) {
    return <KeywordItem keyword={item} />;
  }

  return (
    <Box marginBottom="s24" paddingHorizontal="s16">
      <Text
        preset="headingSmall"
        color="primaryContrast"
        marginBottom="s12"
        mt="s16">
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyword => keyword.id.toString()}
        data={keywords}
        renderItem={renderItem}
        contentContainerStyle={{paddingRight: 16}}
      />
    </Box>
  );
}
