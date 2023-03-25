import {StyleSheet} from 'react-native';
import FwkTabContainer from '~/fwk/containers/tabs/tabContainer/FwkTabContainer';
import {IFwkTabContainerProps} from '~/fwk/containers/tabs/tabContainer/IFwkTabContainerProps';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const TabContainer = ({...props}: IFwkTabContainerProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return FwkTabContainer({...props, tabBarItemStyle: styles.tabContainer});
};

export default TabContainer;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    tabContainer: {
      backgroundColor: colors.backgroundColor,
    },
  });
};
