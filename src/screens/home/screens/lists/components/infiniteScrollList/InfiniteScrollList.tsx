import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListWrapper from '../listWrapper/ListWrapper';
import Card from '~/components/containers/card/Card';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {getInfiniteScrollData} from '~/services/signedIn/ListsService';
import {useDimentions} from '~/hooks/useDimentions';

const translator = TRANSLATION_SCREENS.home.screens.lists;
const {vh} = useDimentions();

const InfiniteScrollList = () => {
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastPageFetched, setLastPageFetched] = useState(false);
  const pageSize = 10;

  const fetchData = async (pageNumber: number) => {
    setIsLoading(true);
    getInfiniteScrollData({pageNumber, pageSize})
      .then(response => {
        const newData = [...data, ...response.data];
        setData(newData);

        setLastPageFetched(response.lastPage);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchMoreData = () => {
    if (!isLoading) {
      setPageNumber(pageNumber + 1);
      fetchData(pageNumber + 1);
    }
  };

  useEffect(() => {
    fetchData(pageNumber);
  }, []);

  return (
    <ListWrapper buttonLabel={translator.actionBar.infiniteScroll}>
      <Card style={styles.card}>
        <>
          <PrimaryText text={translator.infiniteScroll.header} />
          <FlatList
            data={data}
            renderItem={item => <PrimaryText text={`${item.item}`} />}
            onEndReached={fetchMoreData}
            onEndReachedThreshold={0.4}
          />
          {lastPageFetched && <PrimaryText text={translator.infiniteScroll.noMoreData} />}
        </>
      </Card>
    </ListWrapper>
  );
};

export default InfiniteScrollList;

const styles = StyleSheet.create({
  card: {
    height: vh * 40,
  },
});
