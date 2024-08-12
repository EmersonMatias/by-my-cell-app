import "./card-our-solutions.css"

export default function CardOurSolutions({name,number,text}: CardOurSolutionsProps) {
    return (
        <div className="w-[380px] px-8 py-16 bg-white rounded-md card">
            <div className="flex gap-5 flex-col content">
                <p className="text-2xl font-semibold"> <span className="text-6xl text-primaryColor">{number}</span> {name}</p>
                <p className="text-base">{text}</p>
            </div>
        </div>
    )
}


type CardOurSolutionsProps = {
    number: string,
    name: string,
    text: string
}