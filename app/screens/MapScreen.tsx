import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import {AppParamList} from '../helpers/AppParamList';
import {IconButton} from 'react-native-paper';
import {Text} from 'react-native-paper';
import {Map} from './components/maps/Map';
const {height, width} = Dimensions.get('window');
interface MapScreenProps {
  navigation: StackNavigationProp<AppParamList, 'MapsComponent'>;
}

interface MapScreenState {
  longitude: number;
  latitude: number;
  searchQuery: string;
}

export class MapScreen extends Component<MapScreenProps, MapScreenState> {
  constructor(props: MapScreenProps) {
    super(props);
    this.state = {
      longitude: 88.43942332759866,
      latitude: 22.581833334677217,
      searchQuery: '',
    };
  }

  handleLong = (longitude: number) => {
    this.setState({longitude});
  };

  handlelat = (latitude: number) => {
    this.setState({latitude});
  };

  onChangeSearch = (query: any) => this.setState({searchQuery: query});

  async componentDidMount() {}

  render() {
    const {searchQuery} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            marginTop: -54,
            marginLeft: -36,
          }}>
          <IconButton icon="map-marker" color={'red'} size={40} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: 200,
              height: 40,
              borderRadius: 15,
              backgroundColor: 'black',
              opacity: 0.8,
            }}>
            <Text style={{color: 'white'}}>
              {'Lat => ' + this.state.latitude.toFixed(5)}
            </Text>
            <Text style={{color: 'white'}}>
              {'Long => ' + this.state.longitude.toFixed(5)}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            top: 12,
            left: 20,
            backgroundColor: 'white',
            opacity: 0.8,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
          }}>
          <IconButton
            icon="keyboard-backspace"
            color={'black'}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <Map handleLong={this.handleLong} handleLat={this.handlelat} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
