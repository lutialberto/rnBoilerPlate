import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {IListWrapperProps} from './IListWrapperProps';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';

const ListWrapper = ({buttonLabel, children}: IListWrapperProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <PrimaryButton
        label={buttonLabel}
        onPress={() => setShow(prev => !prev)}
        containerStyle={styles.button}
      />
      {show && children}
    </>
  );
};

export default ListWrapper;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
