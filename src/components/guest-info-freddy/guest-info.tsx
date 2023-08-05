import { Component, State, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'ir-guest-info',
  styleUrl: 'guest-info.css',
})
export class GuestInfo {
  @State() firstName: string = '';
  @State() lastName: string = '';
  @State() email: string = '';
  @State() altEmail: string = '';
  @State() password: string = '';
  @State() country: string = '';
  @State() city: string = '';
  @State() address: string = '';
  @State() mobile: string = '';
  @State() additionalNumber: string = '';
  @State() newsletter: boolean = false;
  @State() currency: string = '';
  @State() language: string = '';
  @State() firstNameValid: boolean = false;
  @State() lastNameValid: boolean = false;
  @State() emailValid: boolean = false;
  @State() countryValid: boolean = false;
  @State() passwordValid: boolean = false;
  @State() mobileValid: boolean = false;
  @State() additionalNumberValid: boolean = false;
  @State() responseD: boolean = false;
  @State() allCountries: any[] = [];
  @State() submited: boolean = false;
  @Event() submitForm: EventEmitter;

  @Prop({ reflect: true, mutable: true }) data: any = null;

  componentWillLoad() {
    this.fetchDataFromAPI();
  }

  @Watch('data')
  watchHandler(newValue: any, oldValue: any) {
    if (this.data !== null && newValue !== oldValue) {
      this.firstName = this.data.My_Result.My_Guest.FIRST_NAME;
      this.lastName = this.data.My_Result.My_Guest.LAST_NAME;
      this.email = this.data.My_Result.My_Guest.My_User.EMAIL;
      this.altEmail = this.data.My_Result.My_Guest.My_User.DISCLOSED_EMAIL;
      this.password = this.data.My_Result.My_Guest.My_User.PASSWORD;
      this.country = this.data.My_Result.My_Guest.COUNTRY_ID;
      this.city = this.data.My_Result.My_Guest.CITY;
      this.address = this.data.My_Result.My_Guest.ADDRESS;
      this.mobile = this.data.My_Result.My_Guest.MOBILE;
      this.additionalNumber = this.data.My_Result.My_Guest.PHONE_PREFIX;
      this.newsletter = this.data.My_Result.My_Guest.IS_NEWS_LETTER;
      this.currency = this.data.My_Result.My_Guest.My_User.CURRENCY;
      this.language = this.data.My_Result.My_Guest.My_User.LANGUAGE;
    } else {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.altEmail = '';
      this.password = '';
      this.country = '';
      this.city = '';
      this.address = '';
      this.mobile = '';
      this.additionalNumber = '';
      this.newsletter = false;
      this.currency = '';
      this.language = '';
    }
  }

  async fetchDataFromAPI() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        language: 'EN',
      });

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://gateway.igloorooms.com/IR/Get_Exposed_Countries?Ticket=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTEzMDY5NzEsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiZE5oVHRrc2lQaSt5MDdRVkMwN3hwczNRdEJZMEE3eCtkbXR3TWlJdHRaTT0ifQ.6YTCQAE9mS9z0aJutGCzvc9O64bqgYFCINguW_uIb5k',
        requestOptions,
      );
      this.responseD = response.ok;
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.allCountries = data.My_Result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const nameValid = `${name}Valid`;
    this[name] = value;
    this[nameValid] = target.checkValidity();

    console.log(this[name]);
    console.log(this[nameValid]);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.firstNameValid && this.lastNameValid && this.emailValid && this.countryValid && this.passwordValid) {
      this.submitForm.emit({
        FIRST_NAME: this.firstName,
        LAST_NAME: this.lastName,
        EMAIL: this.email,
        DISCLOSED_EMAIL: this.altEmail,
        PASSWORD: this.password,
        COUNTRY_ID: this.country,
        CITY: this.city,
        ADDRESS: this.address,
        MOBILE: this.mobile,
        PHONE_PREFIX: this.additionalNumber,
        IS_NEWS_LETTER: this.newsletter,
      });
    }
    this.submited = true;
  }

  render() {
    let countries = null;
    let countryPrefix = null;
    if (this.responseD === true) {
      countries = this.allCountries.map(country => {
        return (
          <option selected={this.country === country.id} value={country.id}>
            {country.name}
          </option>
        );
      });
      countryPrefix = this.allCountries.map(country => {
        return (
          <option selected={this.additionalNumber === country.PHONE_PREFIX} value={country.PHONE_PREFIX}>
            {country.phone_prefix}
          </option>
        );
      });
    }

    return [
      <h3>
        <strong>Guest Details</strong>
      </h3>,
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            Registration date : <strong>27-jul-2023</strong>
          </h4>
          <a class="heading-elements-toggle">
            <i class="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div class="heading-elements">
            <ul class="list-inline mb-0">
              <li>
                <a data-action="reload">
                  <i class="ft-rotate-cw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-content collapse show">
          <div class="card-body pt-0">
            <fieldset class="mb-1">
              <span class="warning">{!this.firstNameValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text " id="basic-addon1">
                    First Name*
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="basic-addon1"
                  value={this.firstName}
                  name="firstName"
                  onInput={this.handleInputChange.bind(this)}
                  required
                />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <span class="warning">{!this.lastNameValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Last Name*
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="basic-addon1"
                  value={this.lastName}
                  name="lastName"
                  onInput={this.handleInputChange.bind(this)}
                  required
                />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <span class="warning">{!this.emailValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Email*
                  </span>
                </div>
                <input type="email" class="form-control" aria-describedby="basic-addon1" value={this.email} name="email" onInput={this.handleInputChange.bind(this)} required />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Alternative email
                  </span>
                </div>
                <input type="email" class="form-control" aria-describedby="basic-addon1" value={this.altEmail} name="altEmail" onInput={this.handleInputChange.bind(this)} />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <span class="warning">{!this.passwordValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Password*
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  aria-describedby="basic-addon1"
                  value={this.password}
                  name="password"
                  onInput={this.handleInputChange.bind(this)}
                  required
                />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <span class="warning">{!this.countryValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Country*
                  </span>
                </div>
                <select class="select2 form-control" name="country" onInput={this.handleInputChange.bind(this)}>
                  <option selected value={null} disabled>
                    ...
                  </option>
                  {countries}
                </select>
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    City
                  </span>
                </div>
                <input type="text" class="form-control" aria-describedby="basic-addon1" value={this.city} name="city" onInput={this.handleInputChange.bind(this)} />
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Address
                  </span>
                </div>
                <textarea class="form-control" aria-describedby="basic-addon1" name="address" value={this.address} onInput={this.handleInputChange.bind(this)}></textarea>
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <div class="input-group d-flex">
                <div class="input-group-prepend d-flex">
                  <span class="input-group-text" id="basic-addon1">
                    Mobile
                  </span>
                </div>
                <select
                  class={!this.mobileValid && !this.additionalNumberValid && this.submited ? 'select2 border-danger' : 'select2'}
                  name="additionalNumber"
                  onInput={this.handleInputChange.bind(this)}
                >
                  <option selected value="" disabled>
                    ...
                  </option>
                  {countryPrefix}
                </select>
              </div>
            </fieldset>
            <fieldset class="mb-1">
              <span class="warning">{!this.mobileValid && !this.additionalNumberValid && this.submited ? 'This Field is Required!' : ''}</span>
              <div class="input-group">
                <input type="text" class="form-control" aria-describedby="basic-addon1" value={this.mobile} name="mobile" onInput={this.handleInputChange.bind(this)} />
              </div>
            </fieldset>

            <fieldset class="mb-1">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" name="newsletter" id="customCheck1" onInput={this.handleInputChange.bind(this)} checked={this.newsletter} />
                <label class="custom-control-label" htmlFor="newsletter">
                  Newsletter
                </label>
              </div>
            </fieldset>
            <p>
              <strong>Last used:</strong> Language:
              <strong>{this.language}</strong> --- Currency: <strong>{this.currency}</strong>
            </p>
            <hr />

            <button class="btn btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>
              Submit
            </button>
          </div>
        </div>
      </div>,
    ];
  }
}
