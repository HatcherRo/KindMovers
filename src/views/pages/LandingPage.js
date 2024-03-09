import React from 'react';

import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import MainNavbar from 'components/Navbars/MainNavbar';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <MainNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">What we can do for you</h2>
                <h5 className="description">
                As a team of professional movers with 5 years of experience, we offer a comprehensive range of moving services. 
                We can help you plan your move, load and drive the truck, pack your belongings, and disassemble and reassemble your furniture. 
                We will make your move as smooth and hassle-free as possible. We have 4 people in our team, who are ready to help you with your move.
                We can handle any size and type of move, whether it's residential or commercial, local or long-distance, big or small.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
            <Col md="3">

            </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Free Estimates</h4>
                    <p className="description">
                      Not sure how many movers you need? We can help you figure it out for free!
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Experience</h4>
                    <p>
                     5 Years in the business, we have seen it all and can help you with any moving situation.
                    </p>
                  </div>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Base Costs</h2>
            <h3 className="description">All costs are 2 hour minimum + 1 hour travel.<br/>
            No additional fees or taxes apply!
            </h3>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Moving Assistance</CardTitle>
                        <h6 className="card-category">1 Mover</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      2-hour minimum<br/>
                     40$/hour
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mini Moving Team</CardTitle>
                        <h6 className="card-category">2 Movers + Truck</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      2-hour minimum<br/>
                     100$/hour
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">3s Company</CardTitle>
                        <h6 className="card-category">3 Movers + Truck</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      2-hour minimum<br/>
                     135$/hour
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">The Full Package</CardTitle>
                        <h6 className="card-category">4 Movers + Truck</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      2-hour minimum<br/>
                     175$/hour
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact us now!</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />  
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
