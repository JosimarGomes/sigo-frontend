export const orders = [
    {
        key: '5',
        pedidoCodigo: 'CWF555',
        dataInicio: '11/07/2020',
        dataPrevisaoEntrega: '12/07/2020',
        status: 'PARADO',
        etapas: [
            {
                codigo: "676",
                descricao: "FIAÇÃO",
                status: "CONCLUIDO"
            },
            {
                codigo: "677",
                descricao: "MALHARIA",
                status: "CONCLUIDO"
            },
            {
                codigo: "678",
                descricao: "BENEFICIAMENTO",
                status: "CONCLUIDO"
            },
            {
                codigo: "679",
                descricao: "ESTAMPARIA",
                status: "EM_PROCESSO"
            }
        ],
        apontamentos: [
            {
                codigo: "5656",
                tipo: "INCIDENTE",
                descricao: "Faltou material na máquina XPTO",
                dataParada: "12/-7/2020:08:45",
                dataRetorno: "12/07/2020:13:23",
                setor: "BENEFICIAMENTO",
                notas: [
                    "Foi substituído o material e a produção retornou no início da tarde"
                ],
                responsavelId: 233,
                responsavelNome: "Augusto José"
            },
            {
                codigo: "1234",
                tipo: "INCIDENTE",
                descricao: "Faltou material na máquina XPTO",
                dataParada: "12/-7/2020:08:45",
                dataRetorno: "",
                setor: "BENEFICIAMENTO",
                notas: [
                    "Foi substituído o material e a produção retornou no início da tarde",
                    "As aftas ardem e doi"
                ],
                responsavelId: 233,
                responsavelNome: "Augusto José"
            }
        ],
        insumos: [
            {
                codigo: "345",
                descricao: "Algodão",
                quantidade: 300,
                unidadeMedia: "quilogramas",
                perdas: 0
            },
           
        ],
        dataEntregaReal: '13/07/2020'
    },
    {
        key: '3',
        pedidoCodigo: 'CWF777',
        dataInicio: '11/07/2020',
        dataPrevisaoEntrega: '12/07/2020',
        status: 'PRODUCAO',
        etapas: [
            {
                codigo: "676",
                descricao: "FIAÇÃO",
                status: "CONCLUIDO"
            },
            {
                codigo: "677",
                descricao: "MALHARIA",
                status: "CONCLUIDO"
            },
            {
                codigo: "678",
                descricao: "BENEFICIAMENTO",
                status: "EM_PROCESSO"
            },
            {
                codigo: "679",
                descricao: "ESTAMPARIA",
                status: "PENDENTE"
            }
        ],
        apontamentos: [
            {
                codigo: "1234",
                tipo: "INCIDENTE",
                descricao: "Faltou material na máquina XPTO",
                dataParada: "12/-7/2020:08:45",
                dataRetorno: "12/07/2020:13:23",
                setor: "BENEFICIAMENTO",
                notas: [],
                responsavelId: 233,
                responsavelNome: "Manoel Medeiros de Neto Melo"
            }
        ],
        insumos: [
            {
                codigo: "345",
                descricao: "Algodão",
                quantidade: 300,
                unidadeMedia: "quilogramas",
                perdas: 3.45
            },
            {
                codigo: "347",
                descricao: "Corante Blue ZC-34",
                quantidade: 2,
                unidadeMedia: "litros",
                perdas: 0
            },
            {
                codigo: "347",
                descricao: "Corante GREN ZC-34",
                quantidade: 2,
                unidadeMedia: "litros",
                perdas: 0
            }
        ],
        dataEntregaReal: '13/07/2020'
    },
    {
        key: '7',
        pedidoCodigo: 'CWF333',
        dataInicio: '11/07/2020',
        dataPrevisaoEntrega: '12/07/2020',
        status: 'CONCLUIDO',
        etapas: [
            {
                codigo: "676",
                descricao: "FIAÇÃO",
                status: "CONCLUIDO"
            },
            {
                codigo: "677",
                descricao: "MALHARIA",
                status: "CONCLUIDO"
            },
            {
                codigo: "678",
                descricao: "BENEFICIAMENTO",
                status: "CONCLUIDO"
            }
        ],
        apontamentos: [],
        insumos: [
            {
                codigo: "345",
                descricao: "Algodão",
                quantidade: 300,
                unidadeMedia: "quilogramas",
                perdas: 0
            },
            {
                codigo: "347",
                descricao: "Corante Blue ZC-34",
                quantidade: 2,
                unidadeMedia: "litros",
                perdas: 0
            }
        ],
        dataEntregaReal: '13/07/2020'
    },
    {
        key: '2',
        pedidoCodigo: 'CWF222',
        dataInicio: '11/07/2020',
        dataPrevisaoEntrega: '12/07/2020',
        status: 'PENDENTE',
        etapas: [
            {
                codigo: "676",
                descricao: "FIAÇÃO",
                status: "PENDENTE"
            },
            {
                codigo: "677",
                descricao: "MALHARIA",
                status: "PENDENTE"
            },
            {
                codigo: "678",
                descricao: "BENEFICIAMENTO",
                status: "PENDENTE"
            },
            {
                codigo: "679",
                descricao: "ESTAMPARIA",
                status: "PENDENTE"
            }
        ],
        apontamentos: [],
        insumos: [
            {
                codigo: "345",
                descricao: "Algodão",
                quantidade: 300,
                unidadeMedia: "quilogramas",
                perdas: 0
            },
            {
                codigo: "347",
                descricao: "Corante Blue ZC-34",
                quantidade: 2,
                unidadeMedia: "litros",
                perdas: 0
            }
        ],
        dataEntregaReal: '13/07/2020'
    }
]