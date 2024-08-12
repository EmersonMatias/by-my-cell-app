import { Button } from "@/components/ui/button"

import "./home.css"
import { imagesUrl, ourSolutionsContent } from "@/constants/home"
import CardOurSolutions from "@/components/card-our-solutions/card-our-solutions"

export default function Home() {
    return (
        <main className="w-full" >

            <section className="flex items-center h-dvh hero_section shadow-[0_10px_20px_rgba(0,0,0,1)]">
                <div className="ml-60 z-10">
                    <h3 className="text-4xl font-medium">Bem vindo à</h3>
                    <h1 className="text-9xl text-primaryColor font-bold mb-6">ByMyCell</h1>
                    <h2 className="text-5xl font-medium mb-10 ">Simplificando a Genômica no Brasil</h2>
                    <Button variant={"green"} size={"xl"}>Solicite um orçamento</Button>
                </div>
            </section>

            <section className="w-full pt-20 pb-36 px-60 ">
                <h2 className="text-5xl text-center font-semibold text-[#009953] mb-10">Nossas Soluções</h2>

                <div className="flex justify-between flex-wrap gap-20">
                    {ourSolutionsContent.map(({ name, number, text }) => (
                        <CardOurSolutions name={name} text={text} number={number} key={number} />
                    ))}
                </div>
            </section>

            
            <section className="w-full py-10 shadow-[0_0px_30px_rgba(0,0,0,1)]" >
                <h4 className="text-2xl text-center font-semibold mb-10">Reconhecida pelas principais instituições de pesquisa</h4>

                <div className="flex  px-60 justify-between">
                    {imagesUrl.map((url) => (
                        <img className="h-[40px] w-auto" src={url} key={url} />

                    ))}

                </div>

            </section>

            <section className="w-full py-36 flex flex-col gap-20 px-60 items-center">


                <div className="flex items-center gap-20">
                    <img
                        className="w-[700px] h-auto rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,1)]"
                        src="https://nutricaodesafras.com.br/wp-content/uploads/2023/05/saude-do-solo.jpg"
                        alt="a"
                    />

                    <div className="max-w-[600px] flex flex-col gap-8">
                        <h4 className="text-5xl font-semibold text-primaryColor leading-snug">Plataforma genômica para Agricultura de Precisão</h4>
                        <p className="text-lg">Nossa plataforma ByMySoil fornece serviço de análise de microrganismos presentes no solo visando detecção de potenciais causadores de doenças e direcionamento no uso de Bioinsumos</p>
                        <Button>Conheça nossa solução ByMySoil</Button>

                    </div>
                </div>


                <div className="flex items-center gap-20">

                    <div className="max-w-[600px] flex flex-col gap-8">
                        <h4 className="text-5xl text-primaryColor font-semibold leading-snug">Mais de 300 projetos realizados para empresas e ICTs</h4>
                        <p className="text-lg">
                            Nossa plataforma genômica vem sendo utilizada por empresas e grupos de pesquisa
                            no Brasil para acelerar a geração de resultados em genômica e biotecnologia.
                        </p>
                        <Button>Solicite seu orçamento automático</Button>

                    </div>

                    <img
                        className="w-[700px] h-auto rounded-2xl "
                        src="https://planejar.org.br/wp-content/uploads/2024/05/planejar_MAPA-BRASIL-3.jpg"
                        alt="a"
                    />
                </div>


            </section>
        </main>
    )
}