import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class AllUsers extends Component {
  state = {
    users: null,
    btnLabel: "Submit"
  };

  handleSubmit = async (event) => {
      event.preventDefault();

      if (this.state.btnLabel === "Clear") {
        this.clearUsers();
        return;
      }

      const url = "/user/logged"; // if the fetch is being made to the same machine, just consider the API place.
      await fetch( url, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.props.token },
      })
      .then(response => response.json())
      .then(allUsers => this.setState({
        users: allUsers.message.users,
        btnLabel: "Clear"
      }))
      .catch((err) => {
        console.log(err.message);
      });
      console.log("this.state=> ", this.state);
  }

  formatUser = () => {
    return (
      <div>
        <ol>
          {this.state.users.map((user, i) => <li key={i}>{user}</li>)}
        </ol>
        {/* <Button variant="primary" onClick={this.cleanUsers}>
          Clean
        </Button>  */}
      </div>     
      )
  }

  clearUsers = () => {
    this.setState({
      users: null,
      btnLabel: "Submit"
    });
  }

  render() {
    return (
      <div>
        <h1>All users</h1>
        <Card>
          <Form onSubmit={this.handleSubmit}>
              <Form.Label>User's Email</Form.Label>  <br></br>          
            <Button variant="primary" type="submit">
              {this.state.btnLabel}
            </Button>
          {!this.state.users
            ? null
            : this.formatUser()
          }
          </Form>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    token : store.token
  }
};

export default connect(mapStateToProps, null)(AllUsers);
