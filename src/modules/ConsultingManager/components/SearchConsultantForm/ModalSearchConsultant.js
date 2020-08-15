import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {
    PlusOutlined
 } from '@ant-design/icons';

import SearchConsultantForm from './index';


export default function ModalSearchConsultantForm({ onSelectConsultant, companyId }) {

    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(!visible);
    }

    function selectConsultant(values) {
        handleVisibility();
        onSelectConsultant(values);
    }

    return (
        <>
            <Modal
                footer={null}
                visible={visible}
                onCancel={handleVisibility}
                >
                <SearchConsultantForm onSelectConsultant={selectConsultant} companyId={companyId} />
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