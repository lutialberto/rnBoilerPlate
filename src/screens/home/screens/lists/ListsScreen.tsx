import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import EmptyList from './components/emptyList/EmptyList';
import FetchMoreList from './components/fetchMoreList/FetchMoreList';
import SearchList from './components/searchList/SearchList';
import PullDownList from './components/pullDownList/PullDownList';
import InfiniteScrollList from './components/infiniteScrollList/InfiniteScrollList';

const translator = TRANSLATION_SCREENS.home.screens.lists;

const ListsScreen = () => {
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <EmptyList />
      <FetchMoreList />
      <SearchList />
      <PullDownList />
      <InfiniteScrollList />
    </AppScreenContainer>
  );
};

export default ListsScreen;
