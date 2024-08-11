import { Button } from "@/components/ui/button"

import "./home.css"
import { imagesUrl, ourSolutionsContent } from "@/constants/home"
import Card from "@/components/card/card"

export default function Home() {
    return (
        <main className="w-full" >
            <div className="flex items-center h-dvh hero_section">

                <div className="ml-60 z-10">
                    <h3 className="text-4xl font-medium">Bem vindo à</h3>
                    <h1 className="text-9xl text-[#009953] font-bold mb-6">ByMyCell</h1>
                    <h2 className="text-5xl font-medium mb-10 ">Simplificando a Genômica no Brasil</h2>
                    <Button variant={"green"} size={"xl"}>Solicite um orçamento</Button>
                </div>

            </div>

            <div className="py-10" >
                <h4 className="text-2xl text-center font-semibold mb-5">Reconhecida pelas principais instituições de pesquisa</h4>

                <div className="flex  px-60 justify-between">
                    {imagesUrl.map((url) => (
                        <img className="h-[40px] w-auto" src={url} key={url} />

                    ))}

                </div>

            </div>

            <div className="w-full h-dvh py-20 px-60">
                <h2 className="text-5xl text-center font-semibold text-[#009953] mb-10">Nossas Soluções</h2>

                <div className="flex justify-between flex-wrap gap-20">
                    {ourSolutionsContent.map(({ name, number, text }) => (
                        <Card name={name} text={text} number={number} key={number} />
                    ))}
                </div>

            </div>
        </main>
    )
}