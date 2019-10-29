import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class AllUsers extends Component {

  handleSubmit = async (event) => {
      event.preventDefault();

      const url = "/user/logged"; // if the fetch is being made to the same machine, just consider the API place.
      fetch( url, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.props.token },
      })
      .then(response => response.json())
      .then(console.log)
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        <h1>All users</h1>
        <Card>
          <Form onSubmit={this.handleSubmit}>
              <Form.Label>User's Email</Form.Label>            
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
          </Card>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    token             : store.token
  }
};

export default connect(mapStateToProps, null)(AllUsers);
