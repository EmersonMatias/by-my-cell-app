import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export default function StyledNavLink({ to, name }: StyledNavLinkProps) {
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

type StyledNavLinkProps = {
    to: string
    name: string
}