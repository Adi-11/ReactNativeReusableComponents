import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Keyboard,
  EmitterSubscription,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {PROVIDER_DEFAULT, Region} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
import {
  ActivityIndicator,
  IconButton,
  Text,
  TextInput,
} from 'react-native-paper';
import {address_API} from '../../../helpers/keys';
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
  address: {
    localAddress: string;
    city: string;
    state: string;
    pincode: string;
  };
  loading: boolean;
}

export class Map extends PureComponent<MapProps, MapState> {
  inputRef: React.RefObject<any>;
  keyboardDidShowListener!: EmitterSubscription;
  keyboardDidHideListener!: EmitterSubscription;
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
      address: {
        localAddress: '',
        city: '',
        state: '',
        pincode: '',
      },
      loading: true,
    };
    this.inputRef = React.createRef();
    this.keyboardDidShowListener?.bind!;
  }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e: KeyboardEvent) => {
        console.log({e});
      },
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (e: KeyboardEvent) => {
        console.log({e});
      },
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

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
      open,
      address: {state, city, localAddress, pincode},
      loading,
    } = this.state!;
    return (
      <>
        <Animated.View
          style={[
            {
              position: 'absolute',
              zIndex: 10,
              left: 0,
              height: 600,
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
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <IconButton icon="map-marker" />
                <Text style={{fontSize: 20}}>Your current location</Text>
              </View>
              <Animated.View
                style={[{transform: [{rotate: open ? '180deg' : '0deg'}]}]}>
                <IconButton icon="arrow-up-circle-outline" size={25} />
              </Animated.View>
            </View>
          </TouchableOpacity>
          <ScrollView style={{width: '90%', left: 20}}>
            {loading ? (
              <ActivityIndicator size={'large'} />
            ) : (
              <View>
                <TextInput
                  editable={false}
                  label={'Location'}
                  value={`${localAddress} ${city} ${state} ${pincode}`}
                  style={{
                    margin: 10,
                    height: 100,
                  }}
                  multiline
                />
              </View>
            )}

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
          </ScrollView>
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
            this.updateAddress();
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
  updateAddress = () => {
    const url = address_API;
    this.setState({loading: true});
    fetch(
      `${url}${this.state.cordinate.latitude}%2C${this.state.cordinate.longitude}`,
    )
      .then(res => res.json())
      .then(res => {
        // console.log(res.data[2].formatted_address);
        const tmp = res.data;

        let longestAddress = tmp.reduce((a: any, b: any) => {
          return a.formatted_address.length > b.formatted_address.length
            ? a
            : b;
        });

        let areaAddress =
          longestAddress.address_components[0].long_name +
          ', ' +
          longestAddress.address_components[1].long_name +
          ', ' +
          longestAddress.address_components[2].long_name +
          ', ' +
          longestAddress.address_components[3].long_name +
          ', ' +
          longestAddress.address_components[4].long_name +
          ', ' +
          longestAddress.address_components[5].long_name;
        // this.setState({address: {localAddress: areaAddress}});

        let city = longestAddress?.address_components[6]?.long_name
          ? longestAddress.address_components[6].long_name + ','
          : '';
        let state = longestAddress?.address_components[8]?.long_name
          ? longestAddress.address_components[8].long_name + ','
          : '';
        let pincode = longestAddress?.address_components[10]?.long_name
          ? longestAddress.address_components[10].long_name
          : '';
        this.setState({
          address: {localAddress: areaAddress, city, pincode, state},
        });
        this.setState({loading: false});
      })
      .catch(err => console.log(err));
  };
}
