import React from 'react';
import {
    Modal,
    Descriptions,
    Divider,
    Tag,
    Button
} from 'antd';

const { Item } = Descriptions;

export default function ModalIncidentDetail({ show, onCancel, incidents = [] }) {
    return (
        <Modal
            footer={null}
            onCancel={onCancel}
            visible={show}>
            { incidents.map(incident => {

                const title = incident.dataRetorno ? `Incidente ${incident.codigo}`
                    : (<span>
                        {`Incidente ${incident.codigo} `}
                        <Tag color="red">PRODUÇÃO PARADA</Tag>
                    </span>);

                return (
                    <>
                        <Descriptions title={title}>
                            <Item label={<b>Data</b>} span={3}>
                                {incident.dataParada}
                            </Item>
                            <Item label={<b>Aberto por</b>} span={3}>
                                {incident.responsavelNome}
                            </Item>
                            <Item label={<b>Ocorrência</b>} span={3}>
                                {incident.descricao}
                            </Item>
                            {
                                incident.notas.length &&
                                <Item label={<b>Observações</b>} span={3}>
                                    <div>
                                        {incident.notas.map(note => <div>{note}</div>)}
                                    </div>
                                </Item>
                            }
                            {
                                incident.dataRetorno &&
                                <Item label={<b>Finalizado em</b>} span={3}>
                                    {incident.dataRetorno}
                                </Item>
                            }
                        </Descriptions>
                        <Button type="primary">
                            Solicitar Consultoria
                        </Button>
                        <Divider />
                    </>
                )
            })}
        </Modal>
    )
}