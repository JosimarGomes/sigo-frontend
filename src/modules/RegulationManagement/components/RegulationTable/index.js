import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import './index.css';
import ButtonToolBar from 'components/ButtonToolBar';

import apiService from 'services/api';
import { decodeToken, getToken } from 'services/auth';


const columns = [
    {
        title: 'Norma',
        dataIndex: 'nome',
        key: 'nome'
    },
    {
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao'
    },
    {
        title: 'Ano',
        dataIndex: 'anoPublicaçao',
        key: 'anoPublicaçao'
    },
    {
        key: 'actions',
        dataIndex: 'link',
        render: (link, record) => (
            <Button
                href={link}
                target="blank"
                type="dashed"
                size="small">
                Visualizar
            </Button>
        )
    }
];

export default function Regulationtable() {

    const [regulations, setRegulations] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        searchRegulation()
    }, [])

    function searchRegulation(value="") {

        setFetching(true);
        apiService.get(`/normas?s=${value}`)
        .then(res => {
            setFetching(false);
            setRegulations(res.data);
        })
    }

    const userData = decodeToken(getToken());
    const allowAddRegulation = userData.perfil === 'gestor';

    return (
        <>
            <ButtonToolBar>
                {
                    allowAddRegulation && (
                        <Link to="regulation/new">
                            <Button type="primary">Adicionar Norma</Button>
                        </Link>
                    )
                }
                <Input.Search
                    placeholder="Pesquisar"
                    onSearch={searchRegulation}
                    style={{ width: 200 }}
                    enterButton
                    />
            </ButtonToolBar>
            <Table loading={isFetching} columns={columns} dataSource={regulations} />
        </>
    )
}