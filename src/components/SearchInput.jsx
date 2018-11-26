import React, { Component } from "react";

export default class SearchInput extends Component {
  state = {
    search: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onSearchInputChange(this.state.search);
    });
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body" />
              </div>

              <div className="col">
                <input
                  name="search"
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search user"
                  onChange={this.onChange}
                  value={this.state.search}
                />
              </div>

              <div className="col-auto">
                <button className="btn btn-lg btn-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
