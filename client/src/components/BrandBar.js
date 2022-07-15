import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {

    const {device} = useContext(Context);

    return (
        <div className='d-flex' style={{maxWidth: '80vw', overflow: 'auto'}}>
            {device.brands.map(brand => {
                return <Card
                style={{cursor:'pointer', minWidth: 100}}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand(brand)}
                key={brand.id}
                className='p-3'
                >
                    {brand.name}
                </Card>
            })}
            
        </div>
    );
});

export default BrandBar;