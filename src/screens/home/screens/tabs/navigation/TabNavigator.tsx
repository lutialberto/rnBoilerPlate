import React from 'react';
import TabContainer from '~/components/containers/tabs/tabContainer/TabContainer';
import NewsTab from '../tabs/news/NewsTab';
import WeatherTab from '../tabs/weather/WeatherTab';

const TabNavigator = () => {
  const tabs = [
    {
      name: 'News',
      children: <NewsTab />,
      label: 'Noticias',
    },
    {
      name: 'Weather',
      children: <WeatherTab />,
      label: 'Clima',
    },
  ];

  return <TabContainer tabItems={tabs} />;
};

export default TabNavigator;
