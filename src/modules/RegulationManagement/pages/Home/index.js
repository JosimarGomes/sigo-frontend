import React from 'react';

import CardWrapper from 'components/CardWrapper';
import { RegulationTable } from '../../components'

export default function RegulationHome() {
    return (
        <>
            <CardWrapper title="Normas e Regulamentos">
                <RegulationTable />
            </CardWrapper>
        </>
    )
}