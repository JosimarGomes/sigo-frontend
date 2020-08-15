import React from 'react';
import { Divider, Button } from 'antd';
import './index.css';
import {
    ProductionOrderDashboard,
    ProductionOrderTable
} from '../../components';

import CardWrapper from 'components/CardWrapper';

export default () => {
    return (
        <>
            <CardWrapper title="Ordem de Produção">
                <ProductionOrderDashboard />
                <Divider />
                <ProductionOrderTable />
                <Divider />
                <div className="button-actions-container">
                    <Button type="primary" className="action-button">
                        Relatorios da Produção
                    </Button>
                    <Button type="primary" className="action-button">
                        Relatorios de Incidentes
                    </Button>
                </div>
            </CardWrapper>
        </>
    )
}