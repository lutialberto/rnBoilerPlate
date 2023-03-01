import {FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import Card from '~/components/containers/card/Card';
import ListWrapper from '../listWrapper/ListWrapper';

const translator = TRANSLATION_SCREENS.home.screens.lists;

const EmptyList = () => {
  return (
    <ListWrapper buttonLabel={translator.actionBar.empty}>
      <Card>
        <PrimaryText text={translator.emptyList.header} />
        <FlatList
          data={[]}
          renderItem={item => <Text>{item.item}</Text>}
          ListEmptyComponent={
            <PrimaryText text={translator.emptyList.message} style={styles.emptyList} />
          }
        />
      </Card>
    </ListWrapper>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  emptyList: {
    textAlign: 'center',
  },
});
