import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

type RegisterScreenProps = {
  history: any;
};

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = ({
  history,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();
  const { loading, success, userInfo } = useSelector(
    (state: any) => state.userRegister
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (confirmpassword !== password) {
      console.log(`pass:${password}  and ${confirmpassword}`);
      setInfo("password does not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (success) {
      history.push("/login");
    }
  }, [success, history]);

  return (
    <div className="py-3">
      <FormContainer>
        <h1>Register </h1>
        <Form onSubmit={handleSubmit}>
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
              value={confirmpassword}
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
      {info}
    </div>
  );
};

export default RegisterScreen;
