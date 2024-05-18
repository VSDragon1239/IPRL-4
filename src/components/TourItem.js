import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const TourItem = ({tour}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image src={tour.img}/>

            </Card>
        </Col>
    );
};

export default TourItem;