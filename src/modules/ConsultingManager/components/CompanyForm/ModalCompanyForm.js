import React from 'react';
import { Modal } from 'antd';

import CompanyForm from './index';


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
                <CompanyForm
                    onSubmit={submitFormModal} />
            </Modal>
        </>
    )
}