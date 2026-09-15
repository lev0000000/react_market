import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

export default function CreateBrand({show,onHide}){
  const [value, setValue] = useState("");
  const addType = (value) => {
    createBrand({ 'name': value }).then((data) => {
      setValue("");
      onHide();
    });
  }

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder={"Введите название бренда"} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={()=>addType(value)}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
