import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export default function StyledNavLink({ to, name }: StyledNavLink) {
    return (
        <NavLink to={to}>
            {
                ({ isActive }) => (
                    <Button variant={isActive ? "green" : "default"}>{name}</Button>
                )
            }
        </NavLink>
    )
}

type StyledNavLink = {
    to: string
    name: string
}