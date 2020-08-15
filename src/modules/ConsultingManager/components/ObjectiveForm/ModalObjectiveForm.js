import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {
    PlusOutlined, EditOutlined
 } from '@ant-design/icons';

import './index.css';

import ObjectiveForm from '../ObjectiveForm/index';


export default function ModalObjectiveForm({ onSubmit, objective, isFormEdit = false }) {

    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(!visible);
    }

    function submitFormModal(values) {
        onSubmit(values)
        handleVisibility();
    }

    return (
        <>
            <Modal
                footer={null}
                visible={visible}
                onCancel={handleVisibility}
                >
                <ObjectiveForm
                    isFormEdit={isFormEdit}
                    onSubmit={submitFormModal}
                    objective={objective} />
            </Modal>
            {
                isFormEdit ? (
                    <div className="edit-button-right">
                        <Button
                            onClick={handleVisibility}
                            size="small"
                            type="link">
                            Editar <EditOutlined />
                        </Button>
                    </div>
                ) : (
                    <Button
                        onClick={handleVisibility}
                        size="small"
                        type="link">
                        Adicionar <PlusOutlined />
                    </Button>
                )
            }
            
        </>
    )
}