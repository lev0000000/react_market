import React, { useContext } from "react";
import { Context } from "../main";
import { ListGroup, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
        <Row className="d-flex mt-3">
            {
                device.Devices.map(item => 
                    <DeviceItem device={item} key={item.id}/>
                )
            }
        </Row>
    </>
  );
});

export default DeviceList;
