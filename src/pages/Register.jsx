import React from "react";
import {Card, Form, Button} from 'react-bootstrap'

class Register extends React.Component {
  render() {
    return (
      <Card className="cardstyle">
  <Form.Group className="text-center">
      </Form.Group>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
      <Form.Group>
        <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="FirstName" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="LastName" />
      </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <br/>
      <Button className="btncolor" type="submit">
        Submit
      </Button>
      
    </Form>
        </Card.Body>
</Card>
    );
  }
}

export default Register;
