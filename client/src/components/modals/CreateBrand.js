import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}) => {


    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value}).then((data) => {
            setValue('');
            onHide();
        })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Добавить бренд</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Введите название типа'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>
                Закрыть
            </Button>
            <Button variant="outline-success" onClick={addBrand}>
                Добавить
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;