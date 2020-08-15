import React from 'react';

import CardWrapper from 'components/CardWrapper';
import { CompanyTable } from '../../components'

export default function Company() {
    return (
        <>
            <CardWrapper title="Empresas">
                <CompanyTable />
            </CardWrapper>
        </>
    )
}