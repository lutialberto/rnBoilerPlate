import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useDimentions} from '~/hooks/useDimentions';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import Card from '~/components/containers/card/Card';
import SearchInput from '~/fwk/forms/inputs/searchInput/SearchInput';
import ListWrapper from '../listWrapper/ListWrapper';

const translator = TRANSLATION_SCREENS.home.screens.lists;
const {vh} = useDimentions();

const SearchList = () => {
  const pullDownList = [
    'dsa',
    'weq',
    'gfhg',
    'bmjy',
    'bglo',
    'nbvnp',
    'dsaññv',
    'jhnñuy',
    'qdwpdav',
  ];
  const [search, setSearch] = useState('');

  return (
    <ListWrapper buttonLabel={translator.actionBar.search}>
      <Card>
        <SearchInput onChange={value => setSearch(value)} />
        <PrimaryText text={translator.searchList.header} />
        <FlatList
          data={pullDownList.filter(item => item.toLowerCase().includes(search.toLowerCase()))}
          renderItem={item => <PrimaryText text={item.item} />}
          style={styles.flatlist}
        />
      </Card>
    </ListWrapper>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  flatlist: {
    maxHeight: vh * 15,
  },
});
