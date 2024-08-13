import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import linkedin from "../assets/linkedin.png"

export default function TeamCard({name,position,urlImage}: TeamCardProps){
    return(
        <Card className="w-fit  shadow-[0_0px_30px_rgba(0,0,0,1)]">

        <CardHeader className=" rounded-t-lg bg-gradient-to-b from-white to-transparent">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-black font-medium">{position}</CardDescription>
        </CardHeader>

        <CardContent>
            <img alt={`Imagem de ${name}`} className=" h-[320px] w-auto " src={urlImage}/>
        </CardContent>

        <CardFooter className="flex justify-center from-white to-transparent">
            <img alt="Icone do Linkedin" className="w-10" src={linkedin}/>
        </CardFooter>
    </Card>
    )
}

type TeamCardProps = {
    name: string,
    position: string,
    urlImage: string
}