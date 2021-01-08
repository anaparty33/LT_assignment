import React, { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";

type LoginScreenProps = {
  history: any;
};

const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({
  history,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  const dispatch = useDispatch();

  const { userInfo, loading, success, error } = useSelector(
    (state: any) => state.userLogin
  );

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [userInfo, history]);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log(e);
  };

  return (
    <div className="py-3">
      <FormContainer>
        <h1>Login</h1>
        <Form onSubmit={HandleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Enter Email Address"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Not a user ? <Link to="/"> Register </Link>{" "}
          </Col>
        </Row>
        {error && <p>Please check your user and password</p>}
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
