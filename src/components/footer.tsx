import { NavLink } from "react-router-dom"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import whatsapp from "../assets/whatsapp.png"
import { Separator } from "./ui/separator"

export default function Footer() {
    return (
        <footer className="bg-[#17442F] py-10 flex flex-col items-center gap-5 text-white">

            <div className="w-full items-center flex justify-between px-60">
                <img className="h-14 w-fit mb-2" src="https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/ByMyCell_dark2.png?fit=1002%2C297&ssl=1" alt="Logo ByMyCell" />

                <div className="flex gap-5 font-normal">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="">Equipe</NavLink>
                    <NavLink to="">Contato</NavLink>
                </div>

                <div className="flex gap-8">
                    <NavLink to=""><img alt="Icone do Instagram"  className="w-10 h-10" src={instagram} /></NavLink>

                    <NavLink to=""><img alt="Icone do Whatsapp"  className="w-10 h-10" src={whatsapp} /></NavLink>

                    <NavLink to=""><img alt="Icone do Linkedin" className="w-10 h-10" src={linkedin} /></NavLink>
                </div>
            </div>

            <Separator className="my-2 bg-gray-500 w-[1400px]" />

            <div >© Todos os direitos reservados.</div>
        </footer>
    )
}