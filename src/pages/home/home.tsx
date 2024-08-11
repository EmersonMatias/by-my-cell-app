import { Button } from "@/components/ui/button"

import "./home.css"

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

            <div className="h-dvh">

            </div>
        </main>
    )
}