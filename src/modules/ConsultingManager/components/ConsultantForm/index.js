import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const { Item } = Form; 

export default function ConsultantForm({ onSubmit, isFormEdit, company }) {

    const [loading, setLoading] = useState(false);

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    };

    function submitForm(fieldsValue) {
        let objToSave = fieldsValue;

        setLoading(true);
        onSubmit(objToSave)
            .finally(() => setLoading(false));
    }

    return (
        <Form onFinish={submitForm} initialValues={company} {...layout}>
            <Item>
                <h3>Adicionar Consultor</h3>
            </Item>
            <Item label="Nome" name="nome">
                <Input type="text" />
            </Item>
            <Item label="Email" name="email">
                <Input type="text" />
            </Item>
            <Item label="Cpf" name="cpf">
                <Input type="text" />
            </Item>
            <Item {...tailLayout}>
                <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit">
                    Salvar
                </Button>
            </Item>
        </Form>
    )
}