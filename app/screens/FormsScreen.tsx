import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import {Colors, IconButton, TextInput} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {HeaderComponent} from './helperScreens/HeaderComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CustomButton} from './components/Buttons/Button';
import Moment from 'moment';
import StepIndicator from 'react-native-step-indicator';
import {customStyles} from '../helpers/col';
import {
  AddressDetails,
  EducationalDetails,
  PersonalDetails,
} from './components/Forms/Form';
interface FormsScreenProps {
  navigation: StackNavigationProp<AppParamList, 'FromsComponent'>;
}
const labels = ['Presonal Details', 'Address', 'Education'];

interface FormsScreenState {
  date: Date;
  mode: string;
  show: boolean;
  BottomView: boolean;
  currposition: number;
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
      currposition: 0,
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
    const {date, mode, show, BottomView, currposition} = this.state;
    return (
      <View style={{flex: 1}}>
        <HeaderComponent
          componentName={'Froms Component'}
          navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{margin: 20}}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currposition}
            stepCount={3}
            labels={labels}
            onPress={() => console.log('Hello')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <IconButton
              icon="arrow-left"
              onPress={() => this.setState({currposition: currposition - 1})}
              style={{position: 'relative', left: 0}}
              disabled={currposition === 0 && true}
            />

            <IconButton
              icon="arrow-right"
              onPress={() => this.setState({currposition: currposition + 1})}
              style={{position: 'relative', right: 0}}
              disabled={currposition === 2 && true}
            />
          </View>
          {currposition === 0 && <PersonalDetails date={date} />}
          {currposition === 1 && <AddressDetails />}
          {currposition === 2 && <EducationalDetails />}
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
                borderRadius={10}
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
