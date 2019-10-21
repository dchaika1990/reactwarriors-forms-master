import React from "react";
import countries from '../data/countries'

export default class App extends React.Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    county: '',
    gender: 'male',
    agree: true,
    avatar: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
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

  render() {

    // const getOptionsCountries = countries.map(country => (
    //   <option key={country.id} value={country.id}>{country.name}</option>
    // ));

    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name='username'
              ref={node => (this.username = node)}
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              name='password'
              ref={node => (this.password = node)}
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              name='repeatPassword'
              ref={node => (this.repeatPassword = node)}
              value={this.state.repeatPassword}
              onChange={this.onChange}
            />
          </div>
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
