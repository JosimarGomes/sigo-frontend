/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Space } from 'antd';

import { ConsultingForm } from '../../components';
import { useConsultingContext, types } from '../../components/ConsultingForm/ConsultingFormContext';
import apiService from 'services/api';

export default function DetailConsulting(props) {

    const [isFetching, setFetching] = useState(false);
    // const [consulting, setConsulting] = useState({}); 
    const [, dispacth] = useConsultingContext();
    const { id } = useParams();
    

    useEffect(() => {
        setFetching(true);
        apiService.get(`/consultorias/${id}`)
        .then(res => {
            console.log("res", res)
            setFetching(false);
            dispacth({ type: types.SET_CONSULTING_VALUES, payload: res.data });
        })
        // .catch(err => console.log("err", err))

        return () => dispacth({ type: types.CLEAR_CONSULTING_VALUES });
    }, [id])

    function onSubmit(values) {
        console.log("UPDATE VALUES", values)
        dispacth({ type: types.SET_CONSULTING_VALUES, payload: values });

        return new Promise((res) => {
            setTimeout(() => {
                res('ok')
            }, 1000);
        })
    }

    if (isFetching) {
        return (
            <Space size="middle">
                <Spin size="large" />
            </Space>
        )
    }

    return (
        <ConsultingForm
            onSubmit={onSubmit}
            isFormEdit />
    )
}