import React, { useState, useEffect } from 'react';
import { Form, Input, List } from 'antd';

import './index.css';
import apiService from 'services/api';

const { Item } = Form; 
const { Search } = Input;


export default function SearchRegulationForm({ onSelectRegulation }) {

    const [regulations, setRegulations] = useState([]);
    const [isFetching, setFetching] = useState(false);


    function fetchRegulations(value) {
        setFetching(true);
        setRegulations([]);
        apiService.get(`/normas?s=${value}`)
        .then(res => {
            console.log("res", res)
            setRegulations(res.data);
            setFetching(false);
        })
    }

    function selectRegulation(regulation) {
        onSelectRegulation(regulation);
    }

    return (
        <Form>
            <Item>
                <h3>Adicionar Norma</h3>
            </Item>
            <Item label="Norma" name="norma">
                <Search
                    enterButton='Pesquisar'
                    onSearch={fetchRegulations}
                    placeholder="pesquisar norma" />
            </Item>
            <List
                loading={isFetching}
                bordered
                dataSource={regulations}
                renderItem={item => (
                    <List.Item
                        className="list-item-hover"
                        onClick={() => selectRegulation(item)}>
                        {item.nome}
                    </List.Item>
                )}
            />
        </Form>
    )
}