import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export default function StyledNavLink({ to, name }: StyledNavLink) {
    return (
        <NavLink to={to}>
            {
                ({ isActive }) => (
                    <Button className={isActive ? "bg-red-600" : ""}>{name}</Button>
                )
            }
        </NavLink>
    )
}

type StyledNavLink = {
    to: string
    name: string
}