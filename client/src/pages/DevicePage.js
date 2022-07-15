import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device =  {id: 3, name: 'IPHONE 12', price: 60000, rating: 4, img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80'};
    
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Оперативная память', description: '5 гб'},
        {id: 3, title: 'Оперативная память', description: '5 гб'},
        {id: 4, title: 'Оперативная память', description: '5 гб'},
        {id: 5, title: 'Оперативная память', description: '5 гб'},
    ]
    return (
        <Container>
            {/* чтобы колонки не переходили на другую строку, добавляем их в Row */}
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} className='mt-3'/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign:'center'}}>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`,
                        width: 240, height: 240, backgroundSize: 'cover', fontSize: 56}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} рублей</h3>
                        <Button variant="outline-dark">Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex dlex-column m-5'>
                <h1>Характеристики</h1>
                {description.map((info, index) => {
                    return <Row key={info.id}
                    style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', 
                    padding: 10}}>

                        {info.title} : {info.description}
                        </Row>
                })}
            </Row>
        </Container>
    )
}

export default DevicePage;