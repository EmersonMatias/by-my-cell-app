import { Button } from "@/components/ui/button"

import "./home.css"
import { cardImageContent, imagesUrl, ourSolutionsContent } from "@/constants/home"
import CardOurSolutions from "@/components/card-our-solutions/card-our-solutions"
import CardImage from "@/components/card-image"

export default function Home() {
    return (
        <main className="w-full" >

            <section className="flex items-center h-dvh hero_section shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
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
                    {cardImageContent.map(({buttonText,imagePosition,text,title,urlImage}) => (
                        <CardImage
                        imagePosition={imagePosition}
                        title={title}
                        text={text}
                        urlImage={urlImage}
                        buttonText={buttonText}
                        key={title}
                        />
                    ))}
            </section>

        </main>
    )
}