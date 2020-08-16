import React, { useState, useEffect } from 'react';
import { Tabs, Space, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import { CompanyForm, ConsultantsTable } from '../../components';
import apiService from 'services/api';

const { TabPane } = Tabs;

export default function DetailConsulting(props) {

    const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        apiService.get(`/empresas/${id}`)
        .then(res => {
            setCompany(res.data);
        })
        .finally(() => setLoading(false))
    }, [id])

    function onSubmit(values) {
        console.log("UPDATE VALUES", values)
    }

    return (
        <>
            <h2>{company.nome}</h2>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Dados" key="1">
                    {
                        loading ?
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                        :
                        <CompanyForm
                            company={company}
                            onSubmit={onSubmit}
                            isFormEdit />
                    }
                </TabPane>
                <TabPane tab="Consultores" key="2">
                    <ConsultantsTable />
                </TabPane>
            </Tabs>
        </>
    )
}