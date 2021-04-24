import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import {AppParamList} from '../helpers/AppParamList';
import MapView, {PROVIDER_DEFAULT, Region} from 'react-native-maps';
import {IconButton} from 'react-native-paper';
import {Text} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
interface MapScreenProps {
  navigation: StackNavigationProp<AppParamList, 'MapsComponent'>;
}

interface MapScreenState {
  cordinate: {
    longitude: number;
    latitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  marginBottom: number;
  widthOfMap: number;
}

export class MapScreen extends Component<MapScreenProps, MapScreenState> {
  constructor(props: MapScreenProps) {
    super(props);
    this.state = {
      cordinate: {
        longitude: 88.43942332759866,
        latitude: 22.581833334677217,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marginBottom: 1,
      widthOfMap: width,
    };
  }

  async componentDidMount() {}

  render() {
    const {
      cordinate: {latitude, longitude, latitudeDelta, longitudeDelta},
      marginBottom,
    } = this.state;
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
              {'Long => ' + this.state.cordinate.latitude.toFixed(5)}
            </Text>
            <Text style={{color: 'white'}}>
              {'Lat => ' + this.state.cordinate.longitude.toFixed(5)}
            </Text>
          </View>
        </View>

        <MapView
          provider={PROVIDER_DEFAULT} // remove if not using Google Maps
          style={[styles.map, {marginBottom}]}
          showsTraffic={true}
          accessibilityHint={'hello'}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          onRegionChangeComplete={(e: Region) => {
            this.setState({
              cordinate: {
                latitude: e.latitude,
                longitude: e.longitude,
                latitudeDelta: e.latitudeDelta,
                longitudeDelta: e.longitudeDelta,
              },
            });
          }}
          onMapReady={() => {
            this.setState({
              marginBottom: 0,
            });
            this.setState(prevState => ({
              ...prevState,
              widthOfMap: prevState.widthOfMap - 1,
            }));
          }}
          region={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}></MapView>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
