import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import moment from 'moment';

import ButtonToolBar from 'components/ButtonToolBar';
import apiService from 'services/api';
import { decodeToken, getToken } from 'services/auth';

const columns = [
    {
        title: 'Código',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Consultoria',
        dataIndex: 'titulo',
        key: 'titulo'
    },
    {
        title: 'Empresa',
        dataIndex: 'empresa',
        key: 'empresa',
        render: empresa => empresa.nome
    },
    {
        title: 'Inicío',
        dataIndex: 'dataInicio',
        key: 'dataInicio',
        render: dataInicio => moment(dataInicio).format("DD/MM/YYYY")
    },
    {
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
            return (
                <Link to={`/consulting/${record.id}`}>
                    <Button
                        type="dashed"
                        size="small">
                        Visualizar
                    </Button>
                </Link>
            )
        }
    }
]

export default function ConsultingTable() {

    const [consultings, setConsultings] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(()=> {
        setFetching(true);
        apiService.get('/consultorias')
            .then(res => {
                setConsultings(res.data)
            })
            .catch(err => console.log("err", err))
            .finally(() => setFetching(false))
    }, [])

    const userData = decodeToken(getToken());
    console.log("userData", userData)
    const allowViewButtonsToolBar = userData.perfil === 'gestor';

    return (
        <>
        {
            allowViewButtonsToolBar && (
                <ButtonToolBar>
                    <Link to="consulting/add/new">
                        <Button type="primary">Adicionar Consultoria</Button>
                    </Link>
                    <Link to="companies">
                        <Button type="primary">Empresas</Button>
                    </Link>
                </ButtonToolBar>
            )
        }
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={consultings} />
        </>
    )
}