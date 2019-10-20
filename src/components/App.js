import React from "react";
import countries from '../data/countries'

export default class App extends React.Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    county: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  onChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ))
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
          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
