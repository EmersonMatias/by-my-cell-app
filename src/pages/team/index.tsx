import { Button } from "@/components/ui/button";
import "./team.css"
import { ourTeamContent } from "@/constants/team";
import TeamCard from "@/components/team-card";

export default function About() {
    return (
        <main className="pt-24">

            <section className="flex items-center justify-center gap-10 py-20 px-60">
                <div className="w-[600px]">
                    <h2 className="text-5xl font-semibold text-primaryColor mb-2">Sobre Nós</h2>
                    <p className="text-lg mb-5">Uma equipe jovem que, desde 2022, vem buscando impactar de forma significativa o desenvolvimento da Biotecnologia no Brasil. De Ribeirão Preto, para o Brasil e o Mundo.</p>
                    <Button size={"lg"}>Conheça nosso time</Button>
                </div>

                <img className="h-[700px] w-auto rounded-md shadow-[0_10px_20px_rgba(0,0,0,1)]"
                    alt="Foto da equipe"
                    src="https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/Team.png?resize=768%2C1024&ssl=1"
                />
            </section>

            <section className="w-full shadow-[0_0px_30px_rgba(0,0,0,1)] flex items-center justify-between py-10 px-60">

                <div className=" w-[400px] text-center">
                    <div className="mb-5 flex flex-col items-center justify-center">
                        <h2 className="text-5xl text-primaryColor font-semibold text-center mb-2">13+</h2>
                        <h5 className="text-xl font-bold">Pessoas</h5>
                    </div>

                    <div className="h-[120px]">
                        Além dos fundadores, nosso time é formado por mestres, doutores e estudantes de
                        áreas de ciências da vidas e ciências exatas, atuando em um ambiente extremamente
                        colaborativo.
                    </div>
                </div>

                <div className=" w-[400px] text-center">
                    <div className="mb-5 flex flex-col items-center justify-center">
                        <h2 className="text-5xl text-primaryColor font-semibold text-center mb-2">120m</h2>
                        <h5 className="text-xl font-bold">Espaço</h5>
                    </div>

                    <div className=" h-[120px]">
                        Divididos entre a unidade de laboratório e de software dedicados a execução das
                        análises de nossos clientes e atividades de pesquisa e desenvolvimento.
                    </div>
                </div>

                <div className=" w-[400px] text-center">
                    <div className="mb-5 flex flex-col items-center justify-center">
                        <h2 className="text-5xl text-primaryColor font-semibold text-center mb-2">3</h2>
                        <h5 className="text-xl font-bold">Artigos</h5>
                    </div>

                    <div className=" h-[120px]">
                        Artigos publicados em revistas internacionais por membros da nossa equipe, como
                        resultados de parceria da ByMyCell com grupos de pesquisa.
                    </div>
                </div>

            </section>

            <section className="py-20 px-60 ourTeam">
                <h2 className="text-5xl text-primaryColor font-semibold text-center mb-16">Conheça nosso time de liderança</h2>

              <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
                {ourTeamContent.map(({name,position,urlImage}) => (
                    <TeamCard name={name} position={position} urlImage={urlImage} key={name}/>
                ))}
              </div>
            </section>
            
        </main>
    )
}