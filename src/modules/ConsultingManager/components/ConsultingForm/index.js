import React, { useState, useEffect } from 'react';
import {
    Form,
    Button,
    Input,
    Divider,
    Card,
    Select
} from 'antd';
import moment from 'moment';

 import './index.css';
import CardWrapper from 'components/CardWrapper';
import { useConsultingContext, types } from '../ConsultingForm/ConsultingFormContext';
import {
    ModalObjectiveForm,
    ModalSearchRegulationForm,
    ModalSearchConsultantForm
} from '../'
import apiService from 'services/api';

const { Item } = Form;
const { Option } = Select;

export default function ConsultingForm({ onSubmit, isFormEdit }) {

    const [companies, setCompanies] = useState([]);
    const [consulting, dispacth] = useConsultingContext();

    useEffect(() => {
        searchCompanies();
    }, [])


    if (isFormEdit && !consulting.id) {
        return null;
    }

    function searchCompanies(value) {
        apiService.get('/empresas')
        .then(res => setCompanies(res.data));
    }

    function onSubmitObjectiveForm(values) {
        console.log("values", values)
        dispacth({ type: types.SET_OBJECTIVE_VALUES, payload: values });
    }

    function onSelectRegulation(selected) {
        dispacth({ type: types.SET_REGULATION_VALUES, payload: selected });
    }

    function onSelectConsultant(values) {
        console.log("no inicio", values)
        dispacth({ type: types.SET_CONSULTANT_VALUES, payload: values });
    }

    function onFinish() {
        console.log("VALIDATE", consulting)
        onSubmit(consulting);
    }

    function changeValue(event) {
        const field = event.target.name;
        const value = event.target.value;

        dispacth({type: types.SET_CONSULTING_VALUES, payload: { [field]: value } })
    }

    function changeCompanyValue(companyId) {
        const selectedCompany = companies.find(company => company.id === companyId);

        dispacth({type: types.SET_CONSULTING_VALUES, payload: {
            empresa: selectedCompany, empresaId: companyId, consultores: [] } })
    }

    function onChangePeriodDate(event) {
        event.preventDefault();
        const field = event.target.name;
        const value = moment(event.target.value).toISOString();

        dispacth({type: types.SET_CONSULTING_VALUES, payload: { [field]: value  } });
    }

    function renderOptions(options = []) {
        return options.map(company => (
            <Option
                key={company.id}
                value={company.id}>
                { company.nome }
            </Option>
        ))
    }

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    };

    const initialDate = consulting.dataInicio || new Date();
    const endDate = consulting.dataFim || new Date();

    console.log("consulting", consulting)

    return (
        <div className="detail-consulting-content">
            <CardWrapper>
            
            <Form
                disabled
                {...layout}
                name="detail-consulting-form"
                onFinish={onFinish}
                >
                <Item {...tailLayout}>
                    {
                        consulting.id ?
                        <h3>{`Código ${consulting.id}`}</h3>
                        : <h3>Nova consultoria</h3>
                    }
                </Item>
                <Item label="Inicio">
                    <input
                        type="date"
                        name="dataInicio"
                        onChange={onChangePeriodDate}
                        value={moment(initialDate).format("YYYY-MM-DD")}
                        defaultValue={moment(initialDate).format("YYYY-MM-DD")} />
                </Item>
                <Item label="Termina em">
                    <input
                        name="dataFim"
                        type="date"
                        onChange={onChangePeriodDate}
                        value={moment(endDate).format("YYYY-MM-DD")}
                        defaultValue={moment(endDate).format("YYYY-MM-DD")} />
                </Item>
                <Item label="Título">
                    <Input onChange={changeValue} name="titulo" placeholder="Título" value={consulting.titulo} />
                </Item>
                <Item label="Descrição">
                    <Input.TextArea
                        onChange={changeValue}
                        name="descricao"
                        placeholder="Título"
                        rows={4}
                        value={consulting.descricao} />
                </Item>
                <Divider />
                <Item label="Atividades">
                    {/* <Card> */}
                        <ModalObjectiveForm onSubmit={onSubmitObjectiveForm} />
                        {
                            consulting.objetivos && consulting.objetivos.map(objetivo => {

                                return (
                                    <Card key={objetivo.codigo}>
                                        <ModalObjectiveForm
                                            isFormEdit
                                            onSubmit={onSubmitObjectiveForm}
                                            objective={objetivo} />
                                        <p><b>{ objetivo.descricao }</b></p>
                                        <p>
                                            <span style={{ display: 'flex', justifyContent: 'space-between'}}>
                                                <span><i>Finaliza em:</i> { moment(objetivo.dataLimite).format("DD/MM/YYYY") }</span>
                                                <span><i>Responsável:</i> { objetivo.responsavel }</span>
                                            </span>
                                        </p>
                                    </Card>
                                )
                            })
                        }
                    {/* </Card> */}
                </Item>
                <Divider />
                <Item label="Normas">
                    <ModalSearchRegulationForm onSelectRegulation={onSelectRegulation} />
                    <Card>
                        {
                            consulting.normas &&
                            <ul> {
                                consulting.normas.map(norma => <li key={norma.id}>{norma.normaCodigo || norma.nome}</li>)
                                }
                            </ul>
                        }
                    </Card>
                </Item>
                <Divider />
                <Item label="Empresa">
                    <Select
                        name="empresa"
                        placeholder="Selecione uma empresa"
                        onChange={changeCompanyValue}
                        defaultValue={consulting.empresa ? consulting.empresa.nome : ''}
                    >
                        { renderOptions(companies) }
                    </Select>
                </Item>
                <Item label="Consultores">
                    <ModalSearchConsultantForm
                        companyId={consulting.empresaId}
                        onSelectConsultant={onSelectConsultant} />
                    <Card>
                        {
                            consulting.consultores &&
                            <ul> {
                                consulting.consultores.map(consultor => <li key={consultor.codigo}>{consultor.nome}</li>)
                                }
                            </ul>
                        }
                    </Card>
                </Item>
                <Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                </Item>
            </Form>
            </CardWrapper>
        </div>
    )
}