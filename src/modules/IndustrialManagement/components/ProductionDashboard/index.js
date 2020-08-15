import React from 'react';
import { Card, Divider } from 'antd';
import {
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    RestOutlined
 } from '@ant-design/icons';
import './index.css';

import { getMonthToString } from 'utils/dateUtils';

const iconStyle = { fontSize: 25, marginRight: 10 };

export default function ProductionOrderDashboard() {

    const actualMonth = getMonthToString();

    return (
        <>           
            <h3>Mês de { actualMonth }</h3>
            <Divider />
            <div className="card-report-danger card-report-alert-large">
                <ExclamationCircleOutlined className="card-report-large-icon" />
                <h2>Produção está parada!</h2>
            </div>
            <div className="management-reports-content">
                <Card className="card-report card-report-warning">
                    <h1>18%</h1>
                    <h3>9</h3>
                    <p>Pendentes</p>
                </Card>
                <Card className="card-report card-report-primary">
                    <h1>30%</h1>
                    <h3>6</h3>
                    <p>Em Produção</p>
                </Card>
                <Card className="card-report card-report-success">
                    <h1>65%</h1>
                    <h3>23</h3>
                    <p>Concluídas</p>
                </Card>
                <div className="">
                    <p className="card-tag card-report-danger">
                        <ExclamationCircleOutlined style={iconStyle} />
                        15 Incidentes
                    </p>
                    <p className="card-tag card-report-warning">
                        <ClockCircleOutlined style={iconStyle} />
                        4 Atrasos
                    </p>
                    <p className="card-tag card-report-warning">
                        <RestOutlined style={iconStyle} />
                        2 Perdas
                    </p>
                </div>
            </div>
        </>
    )
}