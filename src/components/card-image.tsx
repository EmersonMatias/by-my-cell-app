import { Button } from "./ui/button";

export default function CardImage({
    imagePosition,
    urlImage,
    buttonText,
    text,
    title
}: CardImageProps) {
    return (
        <div className="flex items-center gap-20">

            {imagePosition === "left" &&
                <img
                    className="w-[700px] h-auto rounded-2xl "
                    src={urlImage}
                    alt="a"
                />
            }

            <div className="max-w-[600px] flex flex-col gap-8">
                <h4 className="text-5xl text-primaryColor font-semibold leading-snug">{title}</h4>
                <p className="text-lg">{text}</p>
                <Button>{buttonText}</Button>
            </div>

            {imagePosition === "right" &&
                <img
                    className="w-[700px] h-auto rounded-2xl "
                    src={urlImage}
                    alt="a"
                />
            }
        </div>
    )
}

type CardImageProps = {
    imagePosition: "left" | "right"
    urlImage: string
    title: string
    text: string
    buttonText: string
}