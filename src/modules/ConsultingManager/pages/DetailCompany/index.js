import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';

import { companies, consultants } from 'mocks/companies';
import { CompanyForm, ConsultantsTable } from '../../components';
import apiService from 'services/api';

const { TabPane } = Tabs;

export default function DetailConsulting(props) {

    const [company, setCompany] = useState({}); 
    const { id } = useParams();

    useEffect(() => {
        apiService.get(`/empresas/${id}`)
        .then(res => {
            setCompany(res.data);
        })
    }, [id])

    function onSubmit(values) {
        console.log("UPDATE VALUES", values)
    }

    return (
        <>
            <h2>{company.nome}</h2>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Dados" key="1">
                    <CompanyForm
                        company={company}
                        onSubmit={onSubmit}
                        isFormEdit />
                </TabPane>
                <TabPane tab="Consultores" key="2">
                    <ConsultantsTable consultants={consultants} />
                </TabPane>
            </Tabs>
        </>
    )
}