import React from 'react';

import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import MainNavbar from 'components/Navbars/MainNavbar';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
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
                  As a team of professional movers with 5 years of experience,
                  we offer a comprehensive range of moving services. We can help
                  you plan your move, load and drive the truck, pack your
                  belongings, and disassemble and reassemble your furniture. We
                  will make your move as smooth and hassle-free as possible. We
                  have 4 people in our team, who are ready to help you with your
                  move. We can handle any size and type of move, whether it's
                  residential or commercial, local or long-distance, big or
                  small.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3"></Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Free Estimates</h4>
                    <p className="description">
                      Not sure how many movers you need? We can help you figure
                      it out for free!
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
                      5 Years in the business, we have seen it all and can help
                      you with any moving situation.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center pricing">
          <Container>
            <div className='mb-4'>
            <h2 className="title text-center m-0">Our Pricing</h2>
            <p className="description text-center">* 2 Hour Minimum + 1 Hour Travel *</p>
            </div>
            <Row className="justify-content-center">
              <Col lg="3" md="6">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5" className="mb-2">
                    <div className=" mb-0" /><i className="fa fa-star" /><br/><strong>Moving Assistance</strong>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-muted small">
                      1 Mover
                    </CardSubtitle>
                    <h2 className='my-1'>
                      <strong>$40</strong> <small>/hr</small>
                    </h2>
                    <Button color="primary" className="my-4">
                      Choose Plan
                    </Button>
                    <CardText>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa" />
                        </li>
                        <li>
                          <i className="fa fa-check" /> 1 Mover
                        </li>
                        <li>
                          <i className="fa fa-check" /> No Additional Fees
                        </li>
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5" className="mb-2">
                    <i className="fa fa-star" /><i className="fa fa-star" /><br/><strong>Mini Moving Team</strong>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-muted small">
                      2 Movers + Truck
                    </CardSubtitle>
                    <h2 className='my-1'>
                      <strong>$100</strong> <small>/hr</small>
                    </h2>
                    <Button color="primary" className="my-4">
                      Choose Plan
                    </Button>
                    <CardText>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-check" /> truck
                        </li>
                        <li>
                          <i className="fa fa-check" />   2 Movers
                        </li>
                        <li>
                          <i className="fa fa-check" /> No Additional Fees
                        </li>
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5" className="mb-2">
                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><br/><strong>Threes Company</strong>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-muted small">
                      3 Movers + Truck
                    </CardSubtitle>
                    <h2 className='my-1'>
                      <strong>$135</strong> <small>/hr</small>
                    </h2>
                    <Button color="primary" className="my-4">
                      Choose Plan
                    </Button>
                    <CardText>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-check" /> truck
                        </li>
                        <li>
                          <i className="fa fa-check" />   3 Movers
                        </li>
                        <li>
                          <i className="fa fa-check" /> No Additional Fees
                        </li>
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5" className="mb-2">
                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><br/><strong>The Full Package</strong>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-muted small">
                      4 Movers + Truck
                    </CardSubtitle>
                    <h2 className='my-1'>
                      <strong>$175</strong> <small>/hr</small>
                    </h2>
                    <Button color="primary" className="my-4">
                      Choose Plan
                    </Button>
                    <CardText>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-check" /> truck
                        </li>
                        <li>
                          <i className="fa fa-check" />  4 Movers
                        </li>
                        <li>
                          <i className="fa fa-check" /> No Additional Fees
                        </li>
                      </ul>
                    </CardText>
                  </CardBody>
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
