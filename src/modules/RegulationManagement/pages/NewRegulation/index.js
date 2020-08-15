import React, { useState } from 'react';
import { Input, Button, Table, message } from 'antd';
import { ReadOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './index.css';
import CardWrapper from 'components/CardWrapper';
import apiService from 'services/api';

export default function NewRegulation(props) {

    const [regulations, setRegulations] = useState([]);
    const [isFetching, setFetching] = useState(false);

    const columns = [
        {
            title: '',
            dataIndex: 'nome',
            key: 'nome'
        },
        {
            title: '',
            dataIndex: 'descricao',
            key: 'descricao',
            render: (description, record) => <a href={record.link} target="blank">{description}</a>
        },
        {
            key: 'new',
            dataIndex: 'link',
            render: (link, record) => (
                <Button
                    onClick={() => addNewRegulation(record)}
                    type="primary"
                    size="small">
                    Adicionar
                </Button>
            )
        }
    ];

    function addNewRegulation(regulation) {
        setFetching(true);
        apiService.post('/normas', regulation)
        .then(res => {
            setFetching(false);
            message.success("Adicionou com sucesso");
            setTimeout(() => {
                props.history.push('/regulation')
            }, 1000)
        })
        .catch(err => message.error("Erro ao adicionar"))
    }

    function searchRegulation(value) {

        setFetching(true);
        apiService.get(`/normas/search?s=${value}`)
        .then(res => {
            setFetching(false);
            setRegulations(res.data)
        })
    }

    return (
        <CardWrapper title="Adicionar norma">
            <div className="new-regulation-back-button">
                <Link to="/regulation">
                    <Button icon={<LeftOutlined />}>Voltar</Button>
                </Link>
            </div>
            <div className="new-regulation-search-content">
                <ReadOutlined style={{ fontSize: 50 }} />
                <h2>
                    Pesquise a norma que deseja adicionar no repositório
                </h2>
                <Input.Search
                    placeholder="Pesquisar"
                    onSearch={searchRegulation}
                    style={{ width: 400 }}
                    enterButton
                    />
            </div>
            {
                (regulations.length > 0 || isFetching) &&
                <Table loading={isFetching} columns={columns} dataSource={regulations} />
            }
        </CardWrapper>
    )
}