import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../actions/userActions";
import FormContainer from "./FormContainer";
import { Form, Row, Col, Button } from "react-bootstrap";
import { logout } from "../actions/userActions";

type UserProfileScreenProps = {
  history: any;
};

const UserProfileScreen: React.FunctionComponent<UserProfileScreenProps> = ({
  history,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: any) => state.userLogin);

  const { user } = useSelector((state: any) => state.userDetails);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        //get user details
        dispatch(getUserProfile());
      } else {
        // set name , email
        setName(user.name);
        setEmail(user.email);
        setID(user._id);
      }
    }
  }, [history, userInfo, user, dispatch]);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="py-3">
      <Row>
        <Col>
          <FormContainer>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>name</Form.Label>
                <Form.Control
                  value={name}
                  type="name"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control value={id} type="id"></Form.Control>
              </Form.Group>
            </Form>
          </FormContainer>
        </Col>
        <Col>
          <Button type="submit" onClick={handleClick}>
            Logout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfileScreen;
