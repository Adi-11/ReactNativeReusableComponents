import React, {useContext, useEffect, useState} from 'react';
import {Banner} from 'react-native-paper';
import {GlobalContext} from '../../context/GlobalProvider';

interface BannerProps {}

export const BannerComponent: React.FC<BannerProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(true);
  const {toggleTheme, theme} = useContext(GlobalContext);

  return (
    <Banner
      visible={theme === 'false' ? visible : !visible}
      actions={[
        {
          label: 'Toggle',
          onPress: async () => {
            setVisible(false);
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
