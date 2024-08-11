import "./card.css"

export default function Card({name,number,text}: CardProps) {
    return (
        <div className="w-[380px] px-8 py-16 bg-white rounded-md card">
            <div className="flex gap-5 flex-col content">
                <p className="text-2xl font-semibold"> <span className="text-6xl text-[#009953]">{number}</span> {name}</p>
                <p className="text-base">{text}</p>
            </div>
        </div>
    )
}


type CardProps = {
    number: string,
    name: string,
    text: string
}