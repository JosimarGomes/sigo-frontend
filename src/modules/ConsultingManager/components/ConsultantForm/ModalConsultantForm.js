import React from 'react';
import { Modal } from 'antd';

import ConsultantForm from './index';


export default function ModalCompanyForm({ onSubmit, visible, onCancel }) {


    function submitFormModal(values) {
        onSubmit(values)
    }

    return (
        <>
            <Modal
                footer={null}
                visible={visible}
                onCancel={onCancel}
                >
                <ConsultantForm
                    onSubmit={submitFormModal} />
            </Modal>
        </>
    )
}