import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {
    PlusOutlined
 } from '@ant-design/icons';

import SearchRegulationForm from './index';


export default function ModalSearchRegulationForm({ onSelectRegulation }) {

    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(!visible);
    }

    function selectRegulation(values) {
        handleVisibility();
        onSelectRegulation(values);
    }

    return (
        <>
            <Modal
                footer={null}
                visible={visible}
                onCancel={handleVisibility}
                >
                <SearchRegulationForm
                    onSelectRegulation={selectRegulation} />
            </Modal>
            <Button
                onClick={handleVisibility}
                size="small"
                type="link">
                Adicionar <PlusOutlined />
            </Button>
        </>
    )
}