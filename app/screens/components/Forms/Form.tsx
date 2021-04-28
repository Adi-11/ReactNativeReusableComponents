import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import Moment from 'moment';
import {View} from 'react-native';
import {CustomButton} from '../Buttons/Button';
interface FormProps {
  date: Date;
}

interface FormState {}

export class PersonalDetails extends Component<FormProps, FormState> {
  render() {
    const {date} = this.props;
    return (
      <>
        <TextInput
          label="Name"
          keyboardType={'default'}
          style={{marginBottom: 20, height: 60, marginTop: 10}}
        />
        <TextInput
          label="Email"
          style={{marginBottom: 20, height: 60}}
          keyboardType={'email-address'}
        />
        <TextInput
          label="Mobile Number"
          style={{marginBottom: 20, height: 60}}
          keyboardType={'numeric'}
        />
        <TextInput
          label="Date of birth"
          style={{marginBottom: 20, height: 60}}
          placeholder={'Select from calender'}
          value={Moment(date).format('YYYY-MM-DD')}
        />
      </>
    );
  }
}

interface AddressProps {}

interface AddressState {}
export class AddressDetails extends Component<AddressProps, AddressState> {
  render() {
    return (
      <>
        <TextInput
          label="Street Address"
          style={{marginBottom: 20, height: 60, marginTop: 10}}
        />
        <TextInput label="Landmark" style={{marginBottom: 20, height: 60}} />
        <TextInput label="City" style={{marginBottom: 20, height: 60}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="State"
            style={{marginBottom: 20, height: 60, width: 140}}
          />
          <TextInput
            label="Pincode"
            style={{marginBottom: 20, height: 60, width: 140}}
            keyboardType={'numeric'}
          />
        </View>
        <TextInput label="Country" style={{marginBottom: 60, height: 60}} />
      </>
    );
  }
}

interface EducationProps {}

interface EducationState {}

export class EducationalDetails extends Component<
  EducationProps,
  EducationState
> {
  render() {
    return (
      <>
        <TextInput
          label="College Name"
          style={{marginBottom: 20, height: 60, marginTop: 10}}
        />
        <TextInput
          label="College's City Name"
          style={{marginBottom: 20, height: 60}}
        />
        <TextInput label="Year" style={{marginBottom: 20, height: 60}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="Degree"
            style={{marginBottom: 20, height: 60, width: 140}}
          />
          <TextInput
            label="Specialization"
            style={{marginBottom: 20, height: 60, width: 140}}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            borderRadius={10}
            color={'rgba(255,255,255,0.7)'}
            height={50}
            width={'80%'}
            margin={15}
            text={'submit'}
            onpress={() => console.log('Form submitted')}
            textSize={20}
          />
        </View>
      </>
    );
  }
}
