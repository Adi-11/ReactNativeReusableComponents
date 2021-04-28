import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component, createRef} from 'react';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import {Colors, Paragraph, TextInput} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {HeaderComponent} from './helperScreens/HeaderComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CustomButton} from './components/Buttons/Button';
import Moment from 'moment';
interface FormsScreenProps {
  navigation: StackNavigationProp<AppParamList, 'FromsComponent'>;
}

interface FormsScreenState {
  date: Date;
  mode: string;
  show: boolean;
  BottomView: boolean;
}

export class FormsScreen extends Component<FormsScreenProps, FormsScreenState> {
  keyboardDidShowSub: any;
  keyboardDidHideSub: any;
  constructor(props: FormsScreenProps) {
    super(props);
    this.state = {
      date: new Date(1598051730000),
      mode: 'date',
      show: false,
      BottomView: true,
    };
  }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', e => {
      this.setState({BottomView: false});
    });
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', e => {
      this.setState({BottomView: true});
    });
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  onChange = (_event: any, selectedDate: Date) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({show: !this.state.show});
    this.setState({date: currentDate});
    console.log({date: this.state.date});
  };

  showMode = (currentMode: any) => {
    this.setState({show: true});
    this.setState({mode: currentMode});
  };

  showDatepicker = () => {
    this.showMode('date');
  };

  showTimepicker = () => {
    this.showMode('time');
  };

  render() {
    const {date, mode, show, BottomView} = this.state;
    return (
      <View style={{flex: 1}}>
        <HeaderComponent
          componentName={'Froms Component'}
          navigation={this.props.navigation}
        />

        <ScrollView contentContainerStyle={{margin: 20}}>
          <Paragraph style={{textAlign: 'center', fontSize: 20}}>
            Personal Details
          </Paragraph>
          <TextInput
            label="Name"
            style={{marginBottom: 20, height: 50, marginTop: 10}}
          />
          <TextInput label="Email" style={{marginBottom: 20, height: 50}} />
          <TextInput
            label="Mobile Number"
            style={{marginBottom: 20, height: 50}}
          />
          <TextInput
            label="College Name"
            style={{marginBottom: 20, height: 50}}
          />
          <Paragraph style={{textAlign: 'center', fontSize: 20}}>
            Address
          </Paragraph>
          <TextInput
            label="Street Address"
            style={{marginBottom: 20, height: 50, marginTop: 10}}
          />
          <TextInput label="Landmark" style={{marginBottom: 20, height: 50}} />
          <TextInput label="Landmark" style={{marginBottom: 20, height: 50}} />
          <TextInput label="Landmark" style={{marginBottom: 20, height: 50}} />
          <TextInput label="Landmark" style={{marginBottom: 20, height: 50}} />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode as any}
              is24Hour={true}
              display="default"
              onChange={this.onChange as any}
            />
          )}
        </ScrollView>
        {BottomView && (
          <>
            <View>
              <TextInput
                label={'date'}
                value={Moment(date).format('dddd: YYYY-MM-DD')}
                placeholder={'Select from Calender'}
                editable={false}
                style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
              />
            </View>
            <View style={{position: 'absolute', right: 10, bottom: 25}}>
              <CustomButton
                borderRadius={50}
                margin={10}
                iconname="calendar"
                iconcolor="black"
                onpress={this.showDatepicker}
                iconsize={35}
                color={Colors.cyan600}
                height={60}
                width={60}
              />
            </View>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
