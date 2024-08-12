import { Button } from "@/components/ui/button"
import "./home.css"
import { cardImageContent, faqContent, imagesUrl, ourSolutionsContent, reviewsCardContent } from "@/constants/home"
import CardOurSolutions from "@/components/card-our-solutions/card-our-solutions"
import CardImage from "@/components/card-image"
import ReviewCard from "@/components/review-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import faqImage from "../../assets/faqImage.svg"
import FaqCard from "@/components/faq-card"

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center"  >

            <section className="w-full flex items-center h-dvh hero_section shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
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
                {cardImageContent.map(({ buttonText, imagePosition, text, title, urlImage }) => (
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

            <section className="w-full py-10 shadow-[0_0px_30px_rgba(0,0,0,1)] flex px-60 gap-10 justify-between z-10">

                <div className="text-center">
                    <h2 className="text-5xl text-primaryColor font-semibold">+300</h2>
                    <p>Amostras analisadas por mês</p>
                </div>

                <div className="text-center">
                    <h2 className="text-5xl text-primaryColor font-semibold">+150</h2>
                    <p>Clientes Satisfeitos</p>
                </div>

                <div className="text-center">
                    <h2 className="text-5xl text-primaryColor font-semibold">80%</h2>
                    <p>Recorrência de nossas clientes</p>
                </div>

                <div className="text-center">
                    <h2 className="text-5xl text-primaryColor font-semibold">10-60 dias</h2>
                    <p>Prazo de entrega de resultados</p>
                </div>
            </section>

            <section className="w-[90%] mt-20 rounded-2xl  py-20 flex  items-center flex-col reviews shadow-[0_0px_30px_rgba(0,0,0,1)]">
                <h2 className="mb-10 text-white text-4xl font-bold w-[600px] text-center">Veja o que nosso clientes dizem sobre nosso trabalho</h2>

                <Carousel
                    opts={{ loop: true, align: "center" }}
                    className="w-[1400px] h-fit"
                >
                    <CarouselContent className="flex items-center py-10">
                        {reviewsCardContent.map(({ comment, name, rating, urlImage }) => (
                            <CarouselItem className="w-[400px] h-fit basis-[30%]" key={urlImage}>
                                <ReviewCard comment={comment} name={name} rating={rating} urlImage={urlImage} />
                            </CarouselItem>

                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </section>

            <section className="px-60 py-20 flex items-center justify-between">
                <div className="w-[800px] flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-primaryColor mb-8">Perguntas Frequentes</h2>

                    {
                        faqContent.map(({ answer, question }) => (
                            <FaqCard answer={answer} question={question} />
                        ))
                    }
                </div>

                <img className="w-[600px] h-auto" src={faqImage} />
            </section>

        </main>
    )
}