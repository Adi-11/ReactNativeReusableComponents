import React, {useContext, useState} from 'react';
import {Banner, useTheme} from 'react-native-paper';
import {GlobalContext} from '../../context/GlobalProvider';

interface BannerProps {}

export const BannerComponent: React.FC<BannerProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(true);
  const paperTheme = useTheme();
  const {toggleTheme} = useContext(GlobalContext);
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Toggle',
          onPress: async () => {
            setVisible(false);
            paperTheme.dark;
            await toggleTheme();
          },
        },
        {
          label: 'Default',
          onPress: () => {
            setVisible(false);
          },
        },
      ]}
      icon="invert-colors">
      Select application theme!
    </Banner>
  );
};
