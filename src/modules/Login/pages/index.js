import React from 'react';
import { Form, Input, Button, message } from 'antd';

import apiService from 'services/api';
import * as auth from 'services/auth';

const { Item } = Form;
export default function LoginPage(props) {
console.log("props", props)
    function onSubmit({ email, senha }) {
        apiService.post(`/auth`, { email, senha })
        .then(res => {
            console.log("res", res)
            auth.login(res.data);
            props.history.push('/consulting');
        })
        .catch(err => {
            console.log("err")
            message.error("Erro ao realizar login")
        })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Faça login</h3>
            <Form style={{ width: 300 }} onFinish={onSubmit}>
                <Item label="Email" name="email">
                    <Input type="text" />
                </Item>
                <Item label="Senha" name="senha">
                    <Input type="password" />
                </Item>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
            </Form>
        </div>
    )
}