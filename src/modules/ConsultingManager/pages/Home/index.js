import React from 'react';

import CardWrapper from 'components/CardWrapper';
import { ConsultingTable } from '../../components';

export default function ConsultingHome() {

    return (
        <>
            <CardWrapper title="Consultorias">
                <ConsultingTable />
            </CardWrapper>
        </>
    )
}