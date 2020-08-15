import React, { useState } from 'react';
import { Form, Input, List } from 'antd';

import apiService from 'services/api';

const { Item } = Form; 
const { Search } = Input;

export default function SearchConsultantForm({ onSelectConsultant, companyId }) {

    const [consultants, setConsultants] = useState([]);
    const [isFetching, setFetching] = useState(false);


    function fetchConsultants(value) {
        setFetching(true);
        apiService.get(`/empresas/${companyId}/consultores`)
        .then(res => {
            setFetching(false);
            setConsultants(res.data)
        });
    }

    function selectConsultant(event) {
        const selectedConsultant = JSON.parse(event.target.attributes.itemdata.value);
        onSelectConsultant(selectedConsultant);
    }

    return (
        <Form>
            <Item>
                <h3>Adicionar consultor</h3>
            </Item>
            <Item label="Consultor" name="norma">
                <Search
                    enterButton='Pesquisar'
                    onSearch={fetchConsultants}
                    placeholder="pesquisar consultor" />
            </Item>
            <List
                loading={isFetching}
                bordered
                dataSource={consultants}
                renderItem={item => (
                    <List.Item
                        itemdata={JSON.stringify(item)}
                        className="list-item-hover"
                        onClick={selectConsultant}>
                        {item.nome}
                    </List.Item>
                )}
            />
        </Form>
    )
}