import React from 'react';
import { message } from 'antd';

import { ConsultingForm } from '../../components';
import apiService from 'services/api';

export default function DetailConsulting(props) {    

    function onSubmit(values) {
        return apiService.post('/consultorias', values)
        .then(res => {
            message.success("Salvou com sucesso");
            setTimeout(() => {
                props.history.push('/consulting');
            }, 1000)
        })
        .catch(err => {
            console.log("err", err)
            message.error("Erro ao salvar consultoria")
        })
    }

    return (
        <>
            <ConsultingForm onSubmit={onSubmit} />
        </>
    )
}