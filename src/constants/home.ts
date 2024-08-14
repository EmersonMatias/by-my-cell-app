export const imagesUrl = [
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/USO.png?resize=187%2C102&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Unicamp.png?resize=150%2C152&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/UNESP.png?resize=195%2C68&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Embrapa-1.png?resize=254%2C106&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Esalq.png?resize=233%2C81&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Butantan.png?resize=210%2C68&ssl=1"
]

export const cardImageContent: CardImage[] = [
    {
        imagePosition: "left",
        urlImage: "https://nutricaodesafras.com.br/wp-content/uploads/2023/05/saude-do-solo.jpg",
        title: "Plataforma genômica para Agricultura de Precisão",
        text: "Nossa plataforma ByMySoil fornece serviço de análise de microrganismos presentes no solo visando detecção de potenciais causadores de doenças e direcionamento no uso de Bioinsumos",
        buttonText: "Conheça nossa solução ByMySoil",
    },

    {
        imagePosition: "right",
        urlImage: "https://planejar.org.br/wp-content/uploads/2024/05/planejar_MAPA-BRASIL-3.jpg",
        title: "Mais de 300 projetos realizados para empresas e ICTs",
        text: "Nossa plataforma genômica vem sendo utilizada por empresas e grupos de pesquisano Brasil para acelerar a geração de resultados em genômica e biotecnologia.",
        buttonText: "Solicite seu orçamento automático",
    }
]



export const faqContent = [
    {
        question: "Como devemos enviar as amostras de solo?",
        answer: "As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por correios a nossa sede em Ribeirão Preto – SP."
    },
    {
        question: "Como enviamos as amostras para genômica e microbiota?",
        answer: "Nosso orçamento automatizado contém informações específicas para cada tipo de amostra a ser analisada."
    },
    {
        question: "Vocês realizam a extração de DNA?",
        answer: "As análise de microbiota e identificação de microrganismos já incluem a extração de DNA. Para genômica, podemos realizar a extração de DNA por uma taxa adicional de 10% do valor do projeto."
    },
    {
        question: "Podemos realizar o pagamento com verba FAPESP ou CNPq?",
        answer: "Sim. Basta informar os dados de faturamento e número de processo para incluirmos na nota fiscal."
    },
    {
        question: "Quais são as formas de pagamento das análises?",
        answer: "Para projetos com valores maiores do que 10 salários mínimos, 50% é pago na contratação e 50% na entrega dos resultados (boleto com vencimento a 15 dias)."
    },
]

type CardImage = {
    imagePosition: "left" | "right",
    urlImage: string,
    title: string,
    text:string,
    buttonText:string,
}