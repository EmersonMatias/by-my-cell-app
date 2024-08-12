import { Separator } from "./ui/separator"


export default function FaqCard({answer,question}: FaqCardProps) {
    return (
        <div>
            <h4 className="text-xl font-medium">{question}</h4>
            <p className="">{answer}</p>
            <Separator className="my-4" />
        </div>
    )
}


type FaqCardProps = {
    question: string,
    answer: string
}