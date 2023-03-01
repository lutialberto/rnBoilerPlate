import {FlatList, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useDimentions} from '~/hooks/useDimentions';
import Card from '~/components/containers/card/Card';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import ListWrapper from '../listWrapper/ListWrapper';

const translator = TRANSLATION_SCREENS.home.screens.lists;
const {vh} = useDimentions();

const FetchMoreList = () => {
  const [fetchMoreList, setFetchMoreList] = useState([1, 2, 3]);
  const flatlistRef = useRef<FlatList<number>>(null);

  const fetchMore = () => {
    setFetchMoreList(prev => [...prev, prev.length + 1]);

    flatlistRef.current?.scrollToEnd();
  };
  return (
    <ListWrapper buttonLabel={translator.actionBar.fetchMore}>
      <Card>
        <PrimaryText text={translator.fetchMoreList.header} />
        <FlatList
          ref={flatlistRef}
          data={fetchMoreList}
          renderItem={item => <PrimaryText text={item.item.toString()} />}
          style={styles.flatlist}
        />
        <PrimaryButton
          label={translator.fetchMoreList.fetchMore}
          onPress={fetchMore}
          variant={'secondary'}
        />
      </Card>
    </ListWrapper>
  );
};

export default FetchMoreList;

const styles = StyleSheet.create({
  flatlist: {
    maxHeight: vh * 15,
  },
});
