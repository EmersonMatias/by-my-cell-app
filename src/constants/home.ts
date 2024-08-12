export const imagesUrl = [
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/USO.png?resize=187%2C102&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Unicamp.png?resize=150%2C152&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/UNESP.png?resize=195%2C68&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Embrapa-1.png?resize=254%2C106&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Esalq.png?resize=233%2C81&ssl=1",
    "https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Butantan.png?resize=210%2C68&ssl=1"
]

export const ourSolutionsContent = [
    {
        number: "01",
        name: "Análise de Microbiota",
        text: "Identificação de microrganismos presentes em amostras a partir de sequenciamento de DNA de nova geração."
    },
    {
        number: "02",
        name: "Genomas de bactérias",
        text: "Sequenciamento completo de genomas de bactérias gram negativas e gram positivas em plataforma Illumina ou Nanopore."
    }, {
        number: "03",
        name: "Genomas de Fungos",
        text: "Sequenciamento do genoma de leveduras e fungos, incluindo anotação estrutural e funcional de genes."
    }, {
        number: "04",
        name: "Metagenômica shotgun",
        text: "Análise por sequenciamento massivo de genomas presentes em amostras complexas."
    }, {
        number: "05",
        name: "Bioinformática customizada",
        text: "Traga o seu próprio dado. Desenvolvemos pipelines customizados para análises de dados gerados por terceiros."
    }, {
        number: "06",
        name: "Engenharia genética",
        text: "Projetos especial de engenharia microbiana baseados em genômica e inteligência artificial."
    },
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



type CardImage = {
    imagePosition: "left" | "right",
    urlImage: string,
    title: string,
    text:string,
    buttonText:string,
}