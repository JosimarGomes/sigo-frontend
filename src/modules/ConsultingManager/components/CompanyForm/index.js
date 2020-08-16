import React from 'react';
import { Form, Input, Button } from 'antd';

const { Item } = Form; 

export default function CompanyForm({ onSubmit, isFormEdit, company }) {
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    };

    function submitForm(fieldsValue) {
        let objToSave = fieldsValue;

        onSubmit(objToSave);
    }

    if (isFormEdit && !company.id) {
        return null;
    }

    return (
        <Form
            onFinish={submitForm}
            initialValues={company} {...layout}>
            {
                !isFormEdit &&
                <Item>
                    <h3>Nova empresa</h3>
                </Item>
            }
            <Item label="Nome" name="nome">
                <Input type="text" />
            </Item>
            <Item label="Endereço" name="logradouro">
                <Input type="text" />
            </Item>
            <Item label="Número" name="numero">
                <Input type="text" />
            </Item>
            <Item label="Bairro" name="bairro">
                <Input type="text" />
            </Item>
            <Item label="Cidade" name="cidade">
                <Input type="text" />
            </Item>
            <Item label="Estado" name="estado">
                <Input type="text" />
            </Item>
            <Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Salvar
                </Button>
            </Item>
        </Form>
    )
}