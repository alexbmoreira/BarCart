import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import Spacer from '../components/theme/Spacer';
import DrinkListItem from '../components/common/DrinkListItem';

import { Context as SearchContext } from '../contexts/SearchContext';

export default function Search() {
  const { state, getDrinks } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (query) => setSearchTerm(query);

  const performSearch = () => getDrinks({ searchTerm });

  const drinks = state.searchDrinks.map((drink, i) => {
    return (
      <View key={drink.id}>
        <Spacer x>
          <DrinkListItem drink={drink} />
          <Spacer amount={5} />
        </Spacer>
      </View>
    );
  });

  return (
    <View>
      <Spacer>
        <Searchbar placeholder="Search for drinks..." onChangeText={onChangeSearch} value={searchTerm} onSubmitEditing={performSearch} />
      </Spacer>
      <ScrollView>{drinks}</ScrollView>
    </View>
  );
}
