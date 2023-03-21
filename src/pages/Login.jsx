import React from "react";
import {Card, Form, Button} from 'react-bootstrap'

class Login extends React.Component {
  render() {
    return (
     <Card className="cardstyle">
  <Form.Group className="text-center">
      </Form.Group>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
      <Form.Group>
        <Form.Label>UserName</Form.Label>
        <Form.Control type="title" placeholder="Title" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="description" placeholder="Description" />
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

export default Login;
