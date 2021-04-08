import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Searchbar } from 'react-native-paper';

import { Context as SearchContext } from '../contexts/SearchContext';

export default function Search() {
  const { state, getDrinks } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (query) => setSearchTerm(query);

  const performSearch = () => getDrinks({ searchTerm });

  const drinks = state.searchDrinks.map((drink) => {
    return <Text key={drink.id}>{drink.name}</Text>;
  });

  return (
    <SafeAreaView>
      <Searchbar placeholder="Search for drinks..." onChangeText={onChangeSearch} value={searchTerm} onSubmitEditing={performSearch} />
      {drinks}
    </SafeAreaView>
  );
}
