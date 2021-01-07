import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassowrd, setConfirmPassword] = useState("");

  return (
    <div className="py-3">
      <FormContainer>
        <h1>Register </h1>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Enter your name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="name"
              placeholder="Enter your Email address"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={confirmpassowrd}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Re-enter Password"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already Exists ? <Link to="/login"> Login </Link>{" "}
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
