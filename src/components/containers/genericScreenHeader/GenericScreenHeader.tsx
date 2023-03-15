import {StyleSheet, View} from 'react-native';
import React from 'react';
import BackButton from '~/components/buttons/backButton/BackButton';
import {IGenericScreenHeaderProps} from './IGenericScreenHeaderProps';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {useDimentions} from '~/hooks/useDimentions';

const {vh} = useDimentions();

const GenericScreenHeader = ({
  title,
  backButtonLabel,
  showBackButton = true,
  onGoBack = () => {},
  rightItems = [],
}: IGenericScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.goBackContainer}>
        {showBackButton && <BackButton label={backButtonLabel} onPress={onGoBack} />}
      </View>
      <View style={styles.titleContainer}>
        <PrimaryText text={title} style={styles.title} />
      </View>
      <View style={styles.actionsContainer}>{rightItems.map(item => item)}</View>
    </View>
  );
};

export default GenericScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: vh * 7,
  },
  goBackContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  title: {
    textAlign: 'center',
  },
  actionsContainer: {
    flex: 1,
    borderWidth: 1,
  },
});
