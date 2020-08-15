import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, message } from 'antd';

import './index.css';
import apiService from 'services/api';

// import { companies } from 'mocks/companies';
import ButtonToolBar from 'components/ButtonToolBar';
import { ModalCompanyForm } from '../';

const columns = [
    {
        title: 'Empresa',
        dataIndex: 'nome',
        key: 'nome'
    },
    {
        title: 'Cidade',
        dataIndex: 'cidade',
        key: 'cidade'
    },
    {
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
            return (
                <div className="company-vew-button">
                    <Link to={`/companies/${record.id}`}>
                        <Button
                            type="dashed"
                            size="small">
                            Visualizar
                        </Button>
                    </Link>
                </div>
            )
        }
    }
]

export default function CompanyTable() {
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        fetchCompanies();        
    }, [])

    function fetchCompanies() {
        setFetching(true);
        apiService.get('/empresas')
        .then(res => {
            setFetching(false);
            setCompanies(res.data);
        })
    }

    function handleShowCompanyForm() {
        setShowCompanyForm(!showCompanyForm);
    }

    function submitCompanyForm(values) {
        apiService.post('/empresas', values)
        .then(res => {
            message.success("Salvou com sucesso");
            setShowCompanyForm(false);
            setTimeout(() => {
                fetchCompanies();
            }, 1200)
        })
        .catch(err => message.error('Erro ao salvar'))
    }

    return (
        <>
            <ButtonToolBar>
                <Button
                    onClick={handleShowCompanyForm}
                    type="primary">
                    Adicionar Empresa
                </Button>
            </ButtonToolBar>
            <Table loading={isFetching} columns={columns} dataSource={companies} />
            <ModalCompanyForm
                onSubmit={submitCompanyForm}
                visible={showCompanyForm}
                onCancel={handleShowCompanyForm} />
        </>
    )
}