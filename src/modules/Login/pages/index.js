import React, { useState } from 'react';
import { Form, Input, Button, message, Alert } from 'antd';

import apiService from 'services/api';
import * as auth from 'services/auth';

const { Item } = Form;
export default function LoginPage(props) {

    const [loading, setLoading] = useState(false);
    function onSubmit({ email, senha }) {
        setLoading(true);
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
        .finally(() => setLoading(false));
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
                <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit">
                    Entrar
                </Button>
            </Form>
            <Alert
                style={{ marginTop: 75 }}
                message="Logar como gestor"
                description={<><p>email: <b>gestorteste@gmail.com</b></p><p>senha padrão para todos os logins: <b>12345</b></p></>}
                type="info"
                />
        </div>
    )
}