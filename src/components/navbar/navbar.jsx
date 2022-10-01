import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "./link";
import LinksContainer from "./linksContainer";
import Nav from "./nav";
import NavTitle from "./title";
import Button from "./button";

function Navbar() {

    const [menu, setMenu] = useState("none");

    const openMenu = () => {
        menu == "none" ? setMenu("content") : setMenu("none");
    }

    return(
        <Nav>
            <NavTitle href="#">EVERYSTREAMING</NavTitle>
            <Button onClick={openMenu}><GiHamburgerMenu size={28}/></Button>
            <LinksContainer showDisplay={`${menu}`}>
                <Link href="#">Movies</Link>
                <Link href="#">Series</Link>
            </LinksContainer>
        </Nav>    
    )

}

export default Navbar;