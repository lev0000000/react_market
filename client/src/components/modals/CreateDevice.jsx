import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../main";

export default function CreateDevice({ show, onHide }) {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(item => item.number !== number))
  }
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новое устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-3 mb-2">
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.Types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.Brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              placeholder={"Введите название устройства"}
            />
            <Form.Control
              className="mt-3"
              placeholder={"Введите цену"}
              type="number"
            />
            <Form.Control
              className="mt-3"
              placeholder={"Загрузите файл"}
              type="file"
            />
            <hr />
            <Button variant={"outline-dark"} onClick={() => addInfo()}>
              Добавить новое свойство
            </Button>
            {info.map((i) => (
              <Row className="mt-3" key={i.number}>
                <Col md={4}>
                  <Form.Control placeholder={"Введите название атрибута"} />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder={"Введите описание атрибута"} />
                </Col>
                <Col md={4}>
                  <Button variant={"danger"} onClick={()=>removeInfo(i.number)}>Удалить</Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={onHide}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
