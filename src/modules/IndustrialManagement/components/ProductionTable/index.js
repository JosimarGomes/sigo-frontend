import React, { useState } from 'react';
import {
    Table,
    Tag,
    Progress
} from 'antd';
import { ModalIncidentDetail } from '..';

import { orders } from 'mocks/orders';




export default function ProductionOrderTable() {

    const [showIncidentsDetails, setShowIncidentsDetails] = useState(false);
    const [selectedIncidents, setSelectedIncidents] = useState([]);

    function hideModalIncidentsDetails() {
        setShowIncidentsDetails(false);
    }

    function showModalIncidentsDetail(incidents = []) {
        setShowIncidentsDetails(true);
        setSelectedIncidents(incidents);
    }

    const columns = [
        {
            title: 'Pedido',
            dataIndex: 'pedidoCodigo',
            key: 'pedidoCodigo',
        },
        {
            title: 'Inicio',
            dataIndex: 'dataInicio',
            key: 'dataInicio',
        },
        {
            title: 'Entrega',
            dataIndex: 'dataPrevisaoEntrega',
            key: 'dataPrevisaoEntrega',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: tag => {
                let color;
    
                switch(tag) {
                    case 'PRODUCAO':
                        color = 'blue';
                        break;
                    case 'PENDENTE':
                        color = 'orange';
                        break;
                    case 'CONCLUIDO':
                        color = 'green';
                        break;
                    case 'PARADO':
                        color = 'red';
                        break;
                    default:
                        color = '';
                }
    
                return (
                    <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                    </Tag>
                );
            },
        },
        {
            title: 'Progresso',
            key: 'etapas',
            dataIndex: 'etapas',
            render: (steps, record) => {
    
                const totalSteps = steps.length;
                const totalStepsComplete = steps.filter(step => step.status === 'CONCLUIDO').length;
                const percentStepsComplete = totalStepsComplete / totalSteps * 100;
    
                let status = '';
                if (record.status === 'PARADO') {
                    status = 'exception';
                }
    
                if (record.status === 'PRODUCAO') {
                    status = 'active';
                }
    
                return (
                    <Progress percent={percentStepsComplete} status={status} />
                )
            }
        },
        {
            title: 'Incidentes',
            key: 'apontamentos',
            dataIndex: 'apontamentos',
            render: (appointments) => {
                const incidents = appointments.filter(appointment => (
                    appointment.tipo === 'INCIDENTE'
                ));

                const totalIncidents = incidents.length;
    
                const label = totalIncidents === 1 ?
                    `${totalIncidents} incidente`
                    :`${totalIncidents} incidentes`;
                
                return totalIncidents === 0 ? label
                    : <a onClick={() => showModalIncidentsDetail(incidents)} title="clique para ver detalhes">{label}</a>
            }
        },
        {
            title: 'Atraso',
            key: 'dataEntregaReal',
            dataIndex: 'dataEntregaReal'
        }
    ];

    return (
        <>
            <Table columns={columns} dataSource={orders} />
            <ModalIncidentDetail
                incidents={selectedIncidents}
                onCancel={hideModalIncidentsDetails}
                show={showIncidentsDetails} />
        </>
    )
}