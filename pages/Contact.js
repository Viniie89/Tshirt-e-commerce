import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import style from "../styles/contact.module.css";
const Contact = () => {
  return (
    <>
      <Header />
      <Container fluid className={style.contactContainer}>
        <Container className={style.contactCon}>
          <Row>
            <Col>
              <div className={style.contactDiv}>
                <h5 className={style.homeText}>Home</h5>
                <h5 className={style.slash}>/</h5>
                <h5 className={style.contactText}>Contact</h5>
              </div>
              <h2 className={style.contacth2}>Contact</h2>
              <p className={style.contactPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <div className={style.contactCard}>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
