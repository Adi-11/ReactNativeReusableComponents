import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Animated, Keyboard} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {PROVIDER_DEFAULT, Region} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
import SearchBar from 'react-native-dynamic-search-bar';
import {IconButton, Text, TextInput} from 'react-native-paper';
import {search_API} from '../../../helpers/keys';
import {CustomButton} from '../Buttons/Button';

interface MapProps {
  handleLong: (longitude: number) => void;
  handleLat: (latitude: number) => void;
}

interface MapState {
  cordinate: {
    longitude: number;
    latitude: number;
    longitudeDelta: number;
    latitudeDelta: number;
  };
  marginBottom: number;
  searchQuery: string;
  open: boolean;
  bounceValue: Animated.Value;
}

export class Map extends Component<MapProps, MapState> {
  inputRef: React.RefObject<any>;
  constructor(props: MapProps) {
    super(props);
    this.state = {
      cordinate: {
        longitude: 88.43942332759866,
        latitude: 22.581833334677217,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marginBottom: 1,
      searchQuery: '',
      open: false,
      bounceValue: new Animated.Value(300),
    };
    this.inputRef = React.createRef();
  }
  onChangeSearch = (query: any) => {
    this.setState({searchQuery: query});
    const url = search_API;
    fetch(`${url}${this.state.searchQuery.trim()}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.data[0]);
      })
      .catch(err => console.log(err));
    console.log({query: this.state.searchQuery.trim()});
  };

  handleBounce = () => {
    var toValue = 300;

    if (!this.state.open) {
      toValue = 0;
      Keyboard.dismiss;
    }

    Animated.spring(this.state.bounceValue, {
      toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();

    this.setState({open: !this.state.open});
  };

  render() {
    const {
      cordinate: {latitude, longitude, latitudeDelta, longitudeDelta},
      marginBottom,
      searchQuery,
      open,
    } = this.state!;
    return (
      <>
        <Animated.View
          style={[
            {
              position: 'absolute',
              zIndex: 10,
              left: 0,
              height: 550,
              width: width,
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
            {transform: [{translateY: this.state.bounceValue}]},
          ]}>
          <TouchableOpacity
            onPress={() => {
              this.setState({open: !open});
              this.handleBounce();
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontSize: 25}}>Search location</Text>
              <Animated.View
                style={[{transform: [{rotate: open ? '180deg' : '0deg'}]}]}>
                <IconButton icon="arrow-up-circle-outline" size={25} />
              </Animated.View>
            </View>
          </TouchableOpacity>
          <View style={{width: '90%', left: 20}}>
            <SearchBar
              ref={this.inputRef}
              onChangeText={this.onChangeSearch}
              value={searchQuery}
              onClearPress={() => {
                this.inputRef?.current?.clear;
                this.setState({searchQuery: ''});
              }}
              onFocus={() => this.handleBounce()}
              spinnerVisibility={
                this.state.searchQuery.length > 0 ? true : false
              }
              darkMode={true}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <IconButton icon="map-marker" color={'red'} size={30} />
              <View>
                <Text style={{fontSize: 21}}>Your current location</Text>
                <TextInput
                  editable={false}
                  style={{height: 30, margin: 10, width: '100%'}}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <CustomButton
                borderRadius={10}
                color={'rgba(255,255,255,0.8)'}
                height={40}
                width={'80%'}
                text={'Confirm location'}
                margin={10}
                textSize={20}
                textcolor={'black'}
                onpress={() => console.log('hello')}
              />
            </View>
          </View>
        </Animated.View>
        <MapView
          provider={PROVIDER_DEFAULT} // remove if not using Google Maps
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            {marginBottom},
          ]}
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

            this.props.handleLat(this.state.cordinate.latitude);
            this.props.handleLong(this.state.cordinate.longitude);
          }}
          onMapReady={() => {
            this.setState({
              marginBottom: 0,
            });
          }}
          region={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}></MapView>
      </>
    );
  }
}
