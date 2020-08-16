import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import moment from 'moment';

const { Item } = Form; 

export default function ObjectiveForm({ objective = { dataLimite: new Date() }, onSubmit, isFormEdit }) {

    const formObjective = useRef('formObjective');

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    };

    function submitForm(fieldsValue) {
        let objToSave = fieldsValue;
        objToSave.dataLimite = moment(fieldsValue.dataLimite).toISOString();
        onSubmit(objToSave);
        formObjective.current.resetFields();        
    }

    const initialValues = {
        descricao: objective.descricao,
        responsavel: objective.responsavel,
        id: objective.id
    }

    return (
        <Form
            ref={formObjective}
            onFinish={submitForm}
            initialValues={initialValues}
            {...layout}>
            <Item>
                { isFormEdit ? <h3>Editar Atividade</h3> : <h3>Nova Atividade</h3> }
            </Item>
            <Item label="Data Entrega" name="dataLimite">
                <input
                    type="date"
                    defaultValue={moment(objective.dataLimite).format('YYYY-MM-DD')}
                     />
            </Item>
            <Item label="Descrição" name="descricao">
                <Input.TextArea
                    placeholder="Título"
                    rows={4} />
            </Item>
            <Item label="Responsável" name="responsavel">
                <Input type="text" />
            </Item>
            <Item name="id">
                <input
                    type="hidden"
                     />
            </Item>
            <Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Salvar
                </Button>
            </Item>
        </Form>
    )
}