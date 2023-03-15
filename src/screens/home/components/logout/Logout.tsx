import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useSessionState} from '~/hooks/sessionState/useSessionState';

const Logout = () => {
  const {logout} = useSessionState();

  const handleLogout = () => {
    logout();
  };

  return (
    <PrimaryButton
      onPress={handleLogout}
      label="Logout"
      variant="secondary"
      containerStyle={styles.button}
    />
  );
};

export default Logout;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
