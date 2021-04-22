import React, {useContext, useEffect, useState} from 'react';
import {Banner, Switch} from 'react-native-paper';
import {GlobalContext} from '../../context/GlobalProvider';

interface BannerProps {}

export const BannerComponent: React.FC<BannerProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(() =>
    theme === 'true' ? true : false,
  );
  useEffect(() => {
    setVisible(theme === 'true' ? true : false);
  }, []);
  const {toggleTheme, theme} = useContext(GlobalContext);
  const onToggleSwitch = async () => {
    await toggleTheme();
    setVisible(visible => !visible);
  };

  return <Switch value={visible} onValueChange={onToggleSwitch} />;
};
