import {FlatList, RefreshControl, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useDimentions} from '~/hooks/useDimentions';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import Card from '~/components/containers/card/Card';
import ListWrapper from '../listWrapper/ListWrapper';

const translator = TRANSLATION_SCREENS.home.screens.lists;
const {vh} = useDimentions();

const PullDownList = () => {
  const [pullDownList, setPullDownList] = useState([
    'dsa',
    'weq',
    'gfhg',
    'bmjy',
    'bglo',
    'nbvnp',
    'dsaññv',
    'jhnñuy',
    'qdwpdav',
  ]);
  const [refreshingPullDownList, setRefreshingPullDownList] = useState(false);

  const onRefresh = () => {
    setRefreshingPullDownList(true);
    setTimeout(() => {
      setPullDownList(prev => prev.reverse());
      setRefreshingPullDownList(false);
    }, 2000);
  };

  return (
    <ListWrapper buttonLabel={translator.actionBar.pullDown}>
      <Card>
        <PrimaryText text={translator.pullDownList.header} />
        <FlatList
          data={pullDownList}
          renderItem={item => <Text>{item.item}</Text>}
          style={styles.flatlist}
          refreshControl={
            <RefreshControl refreshing={refreshingPullDownList} onRefresh={onRefresh} />
          }
        />
      </Card>
    </ListWrapper>
  );
};

export default PullDownList;

const styles = StyleSheet.create({
  flatlist: {
    maxHeight: vh * 15,
  },
});
