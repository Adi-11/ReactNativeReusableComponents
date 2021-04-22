import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';

interface HeaderComponentProps {
  navigation: any;
  componentName: string;
}

interface HeaderComponentState {}

export class HeaderComponent extends Component<
  HeaderComponentProps,
  HeaderComponentState
> {
  render() {
    return (
      <Appbar.Header style={{marginLeft: 10}}>
        <Appbar.BackAction
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Appbar.Content title={this.props.componentName} />
        <Appbar.Action
          icon={'format-color-fill'}
          onPress={() => this.props.navigation.navigate('MasterColors')}
        />
      </Appbar.Header>
    );
  }
}
