import React, { useContext } from "react";
import { Context } from "../main";
import { Card, Col, Image, ListGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();    
    
  return (
    <>
      <Col md={3} onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}>
        <Card className={'mb-5'} style={{ width: 150, cursor: "pointer" }} border={"light"}>
          <Image width={150} height={150} src={device.img} />
          <div>
            <div>{device.name}</div>
            <div>Цена: {device.price}</div>
            <div className="d-flex gap-2 align-items-center">
              <div>Рейтинг: {device.rating}</div>
              <Image width={20} height={20} src={Star} />
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default DeviceItem;
