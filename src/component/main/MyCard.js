import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Main.scss";
const MyCard = ({ data }) => {
  return (
    <Container>
      <Row className="text-center g-5 ">
        {data.map(({ id, title, desc, date, image }) => (
          <Col
            key={id}
            className="d-flex col-sm-12 col-md-6 col-lg-4 justify-content-center p-2"
          >
            <Card className="resim card flex-grow ">
              <Card.Img src={image} alt="Card image" className="img-fluid" />
              <Card.ImgOverlay className="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {date}
                </Card.Subtitle>
                <Card.Text className="card-text text-wrap">{desc}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyCard;
