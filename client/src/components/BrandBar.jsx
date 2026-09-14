import React, { useContext } from "react";
import { Context } from "../main";
import { Card, ListGroup, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
        <Row className="d-flex flex-row gap-2" >
            {device.Brands.map(brand =>
                <Card
                border={brand.id === device.SelectedBrand.id ? 'danger' : 'light'}
                onClick={()=>device.setSelectBrand(brand)} 
                key={brand.id} 
                className="p-2" 
                style={{ width: "unset", minWidth: 100, alignItems: 'center', cursor: 'pointer' }}>
                    {brand.name}
                </Card>
            )}
        </Row>
    </>
  );
});

export default BrandBar;
