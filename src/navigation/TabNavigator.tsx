import React from 'react';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import TabContainer from '~/components/containers/tabs/tabContainer/TabContainer';

const TabNavigator = () => {
  const tabs = [
    {
      name: 'Home2',
      children: <PrimaryText text="home" />,
      label: 'Home',
    },
    {
      name: 'Settings',
      children: <PrimaryText text="settings" />,
      label: 'Settings',
    },
  ];

  return <TabContainer tabItems={tabs} />;
};

export default TabNavigator;
