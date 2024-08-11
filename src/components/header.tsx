import { Outlet } from "react-router-dom";
import StyledNavLink from "./styledNavLink";

export default function Header() {
    return (
        <>
            <header className="bg-pink-100 flex justify-between items-center px-60 py-4">
                <div>
                    <img className="h-14 w-fit" src="https://i0.wp.com/bymycell.com.br/wp-content/uploads/2024/03/ByMyCell_dark2.png?fit=1002%2C297&ssl=1" />
                </div>

                <div className="flex gap-4">
                    <StyledNavLink to="/" name="Home" />
                    <StyledNavLink to="/equipe" name="Equipe" />
                    <StyledNavLink to="/contato" name="Contato" />
                </div>

            </header>

            <Outlet />
        </>
    )
}