import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";
import { useLocation, useParams } from "react-router-dom";
import { Context } from "../main";
import { fetchOneDevices } from "../http/deviceAPI";
export default function DevicePage() {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(()=>{
    fetchOneDevices(id).then(data=>setDevice(data))
  },[])
  return (
    <Container className="d-flex mt-3">
      <Col md={4}>
        <Image width={300} height={300} src={import.meta.env.VITE_API_URL + device.img}></Image>
      </Col>

      <Col md={4}>
        <Row>
          <h2>{device.name}</h2>
          <div className="d-flex align-items-center justify-content-center">
            {device.rating}
            {Array.from({ length: Number(device.rating) }).map((_, index) => (
              <Image width={20} height={20} src={star}></Image>
            ))}
          </div>
        </Row>
      </Col>

      <Col md={4}>
        <Card className="d-flex flex-column align-items-center justify-content-between">
          <h3>{device.price}</h3>
          <Button variant={"outline-dark"}>Добавить в корзину</Button>
        </Card>

        <Row className="d-flex flex-column mt-3">
          <h2>Характеристики</h2>
          {description.map((info,index) => 
            <Row key={info.id} style={{background: index%2===0 ? 'lightgray' : 'transparent'}}>
              {info.title}: {info.description}
            </Row>
          )}
        </Row>
      </Col>
    </Container>
  );
}
