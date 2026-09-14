import React, { useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";
import { useLocation } from "react-router-dom";
import { Context } from "../main";
export default function DevicePage() {
  const device = {
    id: 10,
    name: "Nothing",
    price: "45990",
    rating: "4",
    img: "https://placehold.co/300x300/png?text=Nothing",
  };

  const description = [
    { id: 1, title: "Операционная система", description: "Android 15" },
    { id: 2, title: "Экран", description: "6.7 дюйма" },
    { id: 3, title: "Процессор", description: "Snapdragon 8 Gen 3" },
    { id: 4, title: "Оперативная память", description: "12 ГБ" },
    { id: 5, title: "Встроенная память", description: "256 ГБ" },
    { id: 6, title: "Камера", description: "50 МП" },
    { id: 7, title: "Фронтальная камера", description: "32 МП" },
    { id: 8, title: "Аккумулятор", description: "5000 мАч" },
    { id: 9, title: "Поддержка 5G", description: "Да" },
    { id: 10, title: "Вес", description: "195 г" },
  ];
  return (
    <Container className="d-flex mt-3">
      <Col md={4}>
        <Image width={300} height={300} src={device.img}></Image>
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
