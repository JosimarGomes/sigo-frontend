import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd';
import { useParams } from 'react-router-dom';

import ButtonToolBar from 'components/ButtonToolBar';
import { ModalConsultantForm } from '../index';
import apiService from 'services/api';

const columns = [
    {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
]

export default function ConsultantTable() {

    const [showConsultantForm, setShowConsultantForm] = useState(false);
    const [isFetching, setFetching] = useState(false);
    const [consultants, setConsultants] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetchConsultants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchConsultants() {
        setFetching(true);
        apiService.get(`/empresas/${id}/consultores`)
        .then(res => {
            setFetching(false);
            setConsultants(res.data);
        })
    }
   

    function handleShowConsultantForm() {
        setShowConsultantForm(!showConsultantForm);
    }

    function submitConsultantForm(values) {
        apiService.post(`/empresas/${id}/consultores`, values)
        .then(res => {
            message.success('Salvou com sucesso');
            setShowConsultantForm(false);
            setTimeout(() => {
                fetchConsultants();
            }, 1200)
        })
        .catch(err => message.error('Erro ao salvar'))
    }

    return (
        <>
            <ButtonToolBar>
                <Button
                    onClick={handleShowConsultantForm}
                    type="primary">
                    Adicionar Consultor
                </Button>
            </ButtonToolBar>
            <Table loading={isFetching} columns={columns} dataSource={consultants} />
            <ModalConsultantForm
                visible={showConsultantForm}
                onSubmit={submitConsultantForm}
                onCancel={handleShowConsultantForm} />
        </>
    )
}