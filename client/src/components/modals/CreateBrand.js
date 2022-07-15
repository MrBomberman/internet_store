import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Добавить бренд</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Введите название типа'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>
                Закрыть
            </Button>
            <Button variant="outline-success" onClick={onHide}>
                Добавить
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;