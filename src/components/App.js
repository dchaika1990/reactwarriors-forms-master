import React from "react";
import countries from '../data/countries'
import Field from "./Field";

export default class App extends React.Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    county: '',
    gender: 'male',
    agree: true,
    avatar: '',
    age: 16,
    errors: {
      username: false,
      password: false,
      repeatPassword: false,
      age: false,
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (this.state.username.length < 5) errors.username = 'Must be 5 characters or more';
    if (this.state.password < 3) errors.password = 'Password Must be 3 characters or more';
    if (this.state.password !== this.state.repeatPassword) errors.repeatPassword = 'Must be equil password';

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      })
    } else {
      this.setState({
        errors: {}
      })
      console.log('submit', this.state);
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onChangeAgree = event => {
    this.setState({
      [event.target.name]: event.target.checked,
    })
  }

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ))
  }

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result,
      })
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  incrementAge = () => {
    this.setState((prevState, prevProps) => ({
      age: prevState.age + 1
    }), () => {
      this.setState({
        errors: {
          age: this.state.age < 18 ? 'Must be more 18' : false
        }
      })

    })
  }

  decrementAge = () => {
    this.setState((prevState, prevProps) => ({
      age: prevState.age - 1
    }), () => {
      this.setState({
        errors: {
          age: this.state.age < 18 ? 'Must be more 18' : false
        }
      })

    })
  }

  render() {

    // const getOptionsCountries = countries.map(country => (
    //   <option key={country.id} value={country.id}>{country.name}</option>
    // ));

    return (
      <div className="card">
        <form className="form card-body">
          <Field
            id='username'
            labelText='Username'
            type="text"
            placeholder="Enter username"
            name='username'
            value={this.state.username}
            onChange={this.onChange}
            error={this.state.errors.username}
          />
          <Field
            id='password'
            labelText='Password'
            type="password"
            placeholder="Enter password"
            name='password'
            value={this.state.password}
            onChange={this.onChange}
            error={this.state.errors.password}
          />
          <Field
            id='repeatPassword'
            labelText='Repeat password'
            type="password"
            placeholder="Enter repeat password"
            name='repeatPassword'
            value={this.state.repeatPassword}
            onChange={this.onChange}
            error={this.state.errors.repeatPassword}
          />
          <div className="form-group">
            <label htmlFor="county">County</label>
            <select
              className="form-control"
              id="county"
              name='county'
              value={this.state.county}
              onChange={this.onChange}
            >
              {this.getOptionsItems(countries)}
            </select>
          </div>
          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id='male'
                name='gender'
                value='male'
                checked={this.state.gender === 'male'}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id='female'
                name='gender'
                value='female'
                checked={this.state.gender === 'female'}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <div className="forn-group mb-3">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              className="form-control-file"
              id="avatar"
              name='avatar'
              onChange={this.onChangeAvatar} />
          </div>
          <div className="form-group">
            <div>
              <label>Age</label>
            </div>
            <div className="btn-group">
              <button className='btn btn-secondary' type='button' onClick={this.decrementAge}>-</button>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
                name='age'
                value={this.state.age}
                onChange={this.onChange}
              />
              <button className='btn btn-secondary' type='button' onClick={this.incrementAge}>+</button>
            </div>
            {this.state.errors.age ? (
              <div className="invalid-feedback">
                {this.state.errors.age}
              </div>
            ) : null}
          </div>
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name='agree'
              value={this.state.agree}
              onChange={this.onChangeAgree}
              checked={this.state.agree}
            />
            <label className="form-check-label" htmlFor="agree">
              Confirm the processing of data
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
