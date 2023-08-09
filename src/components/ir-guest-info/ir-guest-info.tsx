import { Component, State, Event, EventEmitter, h, Prop, Watch, Listen } from '@stencil/core';
import { selectOption, guestInfo, guestInfoValidation } from '../../common/models';
import moment from 'moment';

@Component({
  tag: 'ir-guest-info',
  styleUrl: 'ir-guest-info.css',
})
export class GuestInfo {
  @State() Model = new guestInfoValidation();
  @State() gotdata: boolean = false;
  @State() submit: boolean = false;
  @Event() submitForm: EventEmitter<guestInfo>;
  @Event() getSetupData: EventEmitter;
  @Prop({ mutable: true, reflect: true }) setupDataCountries: selectOption[] = null;
  @Prop({ mutable: true, reflect: true }) setupDataCountriesCode: selectOption[] = null;
  @Prop({ reflect: true, mutable: true }) data: guestInfo = null;

  componentWillLoad() {
    this.getSetupData.emit();
  }

  @Watch('data')
  watchHandler() {
    this.submit = false;
    if (this.data !== null) {
      this.Model = { ...this.Model, ...this.data };

      const validationMapping = {
        firstName: (value: string) => value.trim() !== '',
        lastName: (value: string) => value.trim() !== '',
        email: (value: string) => value.trim() !== '',
        password: (value: string) => value.trim() !== '',
        mobile: (value: string) => value.trim() !== '',
        prefix: (value: string) => value.trim() !== '',
      };

      for (const field in validationMapping) {
        this.Model[`${field}Valid`] = validationMapping[field](this.data[field]);
      }
    } else {
      this.Model = new guestInfoValidation();
    }
  }

  @Listen('textChange')
  @Listen('checkboxChange')
  @Listen('selectChange')
  handleInputChange(event) {
    this.submit = false;
    const target = event.target;
    const name = target.label;
    if (target.required !== undefined) {
      const nameValid = `${name}Valid`;
      this.Model[name] = event.detail;
      this.Model[nameValid] = event.detail.trim() !== '' && event.detail !== null ? true : false;
    } else {
      this.Model[name] = event.detail;
    }
  }

  @Listen('clickHanlder')
  handleSubmit(e) {
    e.preventDefault();
    this.submit = true;
    if (this.Model.firstNameValid && this.Model.lastNameValid && this.Model.emailValid && this.Model.countryValid && this.Model.passwordValid) {
      let data: guestInfo = { ...this.Model };
      this.submitForm.emit(data);
    }
  }

  render() {
    let countries = null;
    let countryPrefix = null;
    if (this.setupDataCountries !== null && this.setupDataCountriesCode !== null) {
      countries = (
        <ir-select
          required
          submited={this.submit}
          label={'Country'}
          selectedValue={this.Model.country.toString()}
          data={this.setupDataCountries.map(item => {
            return {
              value: item.value.toString(),
              text: item.text,
            };
          })}
          firstOption={'...'}
        ></ir-select>
      );

      countryPrefix = (
        <ir-select
          label={'Mobile'}
          submited={this.submit}
          selectedValue={this.Model.prefix}
          data={this.setupDataCountriesCode.map(item => {
            return {
              value: item.value.toString(),
              text: item.text,
            };
          })}
          firstOption={'...'}
          selectStyle={false}
          required
        ></ir-select>
      );
    }

    return [
      <h3>
        <strong>Guest Details</strong>
      </h3>,
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            Registration date : <strong>{moment().format('DD-MMM-YYYY')}</strong>
          </h4>
        </div>
        <div class="card-content collapse show">
          <div class="card-body pt-0">
            <ir-input-text placeholder="" label="First Name" submited={this.submit} text={this.Model.firstName} required></ir-input-text>
            <ir-input-text placeholder="" label="Last Name" submited={this.submit} text={this.Model.lastName} required></ir-input-text>
            <ir-input-text placeholder="" label="Email" submited={this.submit} text={this.Model.email} required></ir-input-text>
            <ir-input-text placeholder="" label="Alternative email" text={this.Model.altEmail}></ir-input-text>
            <ir-input-text label="Password" placeholder="" submited={this.submit} type="password" text={this.Model.password} required></ir-input-text>
            {countries}
            <ir-input-text placeholder="" label="City" text={this.Model.city}></ir-input-text>
            <ir-input-text placeholder="" label="Address" text={this.Model.address}></ir-input-text>
            {countryPrefix}
            <ir-input-text put-text LabelAvailable={false} placeholder="" submited={this.submit} text={this.Model.mobile} required></ir-input-text>
            <ir-checkbox label="NewsLetter" checked={this.Model.newsletter}></ir-checkbox>
            <p>
              <strong>Last used:</strong> Language:
              <strong>{this.Model.language}</strong> --- Currency: <strong>{this.Model.currency}</strong>
            </p>
            <hr />
            <ir-button text="Save" color="btn-primary"></ir-button>
          </div>
        </div>
      </div>,
    ];
  }
}
