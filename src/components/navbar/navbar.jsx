import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Link from "./link";
import LinksContainer from "./linksContainer";
import Nav from "./nav";
import NavTitle from "./title";
import Button from "./button";

function Navbar() {

    const [menu, setMenu] = useState("translateX(100%)");
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        menu == "translateX(0)" ? setMenu("translateX(100%)") : setMenu("translateX(0)");
        menuIsOpen == false ? setMenuIsOpen(true) : setMenuIsOpen(false);
    }

    return(
        <Nav>
            <NavTitle href="#">EVERYSTREAMING</NavTitle>
            <Button onClick={openMenu}>{ menuIsOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28}/> }</Button>
            <LinksContainer showMenu={`${menu}`}>
                <Link href="#">Movies</Link>
                <Link href="#">Series</Link>
            </LinksContainer>
        </Nav>    
    )

}

export default Navbar;