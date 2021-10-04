import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Services.css'
const Services = (props) => {
    // destructuring
    const { deptname, aboutdept, durability, img, cost } = props.service;

    return (
        <div>
            {/* Services card dynamically */}
            <div className="text-start ">
                <Col>
                    <Card>
                        <Card.Img variant="top card-img" src={img} />
                        <Card.Body>
                            <Card.Title>{deptname}</Card.Title>
                            <Card.Text>
                                <h5>
                                    About Department: <small className="fs-6"> {aboutdept}</small>
                                </h5>
                                <h5>Time to Complete: <small className="fs-6">{durability} </small> </h5>
                                <h5>Total cost: <small className="fs-6">{cost} </small> </h5>
                                <button className="btn btn-outline-dark px-5">Know More About this Department</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Services;