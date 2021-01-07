import React, { Children } from "react";
import { Row, Col, Container } from "react-bootstrap";

type FormContainerProps = {
  children: any;
};

const FormContainer: React.FunctionComponent<FormContainerProps> = ({
  children,
}) => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormContainer;
