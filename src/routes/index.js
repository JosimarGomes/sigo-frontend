import React from 'react';
import IndustrialManagementRoutes from 'modules/IndustrialManagement/routes';
import RegulationRoutes from 'modules/RegulationManagement/routes';
import ConsultingRoutes from 'modules/ConsultingManager/routes';
import LoginRoutes from 'modules/Login/routes';

function RoutesApp() {
    return ([
        <LoginRoutes key="login" />,
        <IndustrialManagementRoutes key="management" />,
        <RegulationRoutes key="regulation" />,
        <ConsultingRoutes key="consulting" />
    ]);
}

export default RoutesApp;
