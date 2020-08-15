export const consultings = [
    {
        codigo: "C235",
        dataInicio: "23/06/2020",
        dataFim: "30/09/2020",
        concluido: false,
        titulo: "Reavaliação do processo de estocagem",
        descricao: "Reavaliação do processo de estocagem baseado na alteração da norma NBR XPTo vigente",
        empresa: {
            empresaCodigo: "34545",
            nome: "Jeromel Consultoria em Processo Ambiental",
            logradouro: "Avenida Macedo Lima",
            numero: 234,
            complemento: "8 andar - sala 812",
            bairro: "Centro",
            cidade: "Campinas",
            estado: "São Paulo",
            telefone: "19 3444-5566",
            dataInclusao: "12/03/2019",
            responsavelCpf: "345.678.899-88"
        },
        normas: [
            "ABNT NBR NM ISO 3758:2010",
            "ABNT NBR 12251:1990"
        ],
        objetivos: [
            {
                codigo: "34343",
                descricao: "Adequação do processo de estoque no setor B12, seguindo as novas orientações",
                dataLimite: "20/09/2020",
                responsavel: "Josimar Gomes",
            },
            {
                codigo: "3400343",
                descricao: "Novo momento de teste",
                dataLimite: "20/09/2020",
                responsavel: "Josimar Gomes",
            }
        ],
        consultores: [
        ]
    },
    {
        codigo: "4435",
        dataInicio: "01/03/2020",
        dataFim: "30/10/2020",
        concluido: false,
        titulo: "Validação do sub processo de fiação",
        descricao: "Reavaliação do processo de estocagem baseado na alteração da norma NBR XPTo vigente",
        empresa: {
            empresaCodigo: "34545",
            nome: "Tecnix Consulting",
            logradouro: "Avenida Macedo Lima",
            numero: 234,
            complemento: "8 andar - sala 812",
            bairro: "Centro",
            cidade: "Campinas",
            estado: "São Paulo",
            telefone: "19 3444-5566",
            dataInclusao: "12/03/2019",
            responsavelCpf: "345.678.899-88"
        },
        normas: [
            "ABNT NBR NM ISO 3758:2010",
            "ABNT NBR 12251:1990"
        ],
        objetivos: [
            {
                codigo: "34343",
                descricao: "Adequação do processo de estoque no setor B12, seguindo as novas orientações",
                dataLimite: "20/09/2020",
                responsavel: "Josimar Gomes",
                atividades: [
                    {
                        codigo: "6567",
                        objetivoCodigo: "34343",
                        descricao: "Avaliação da estrutura de estoque atual",
                        dataInicio: "30/06/2020",
                        dataFim: "07/07/2020",
                        dataConclusao: "",
                        concluido: false
                    },
                    {
                        codigo: "565657",
                        objetivoCodigo: "34343",
                        descricao: "Avaliação da estrutura de estoque atual",
                        dataInicio: "30/06/2020",
                        dataFim: "07/07/2020",
                        dataConclusao: "",
                        concluido: false
                    }
                ]
            }
        ]
    }
]