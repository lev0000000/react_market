import React, { useState } from "react";
import { createType } from "../../http/deviceAPI";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

export default function CreateType({ show, onHide }) {
  const [value, setValue] = useState("");
  const addType = (value) => {
    createType({ 'name': value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название типа"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => addType(value)}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
