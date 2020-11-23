import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div class="container-fluid">
    <br></br><br></br><br></br>
    <Form> 
      <Row FormGroup>
        <Col md={3}>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="username" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
        </Col> 
      </Row>
      <Button>Sign in</Button>
    </Form>
    </div>
  );
}

export default Example;