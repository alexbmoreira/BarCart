import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Searchbar } from 'react-native-paper';

import { Context as SearchContext } from '../contexts/SearchContext';

export default function Search() {
  const { state, getDrinks } = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const performSearch = () => getDrinks(searchQuery);

  const drinks = state.searchDrinks.map((drink) => {
    return <Text key={drink.id}>{drink.name}</Text>;
  });

  return (
    <SafeAreaView>
      <Searchbar placeholder="Search for drinks..." onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={performSearch} />
      {drinks}
    </SafeAreaView>
  );
}
