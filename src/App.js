import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Users from "./components/Users";
import serachApi from "./components/helpers/serachApi";
class App extends Component {
  state = {
    search: "",
    users: [],
    error: false
  };
  onSearchInputChange = data => {
    this.setState({ search: data }, async () => {
      let users = await serachApi(this.state.serachApi);
      users.length > 0
        ? this.setState({ users, error: false })
        : this.setState({ users: [], error: true });
    });
  };
  render() {
    return (
      <div className="container">
        <SearchInput onSearchInputChange={this.onSearchInputChange} />
        <Users error={this.state.error} users={this.state.users} />
      </div>
    );
  }
}

export default App;
