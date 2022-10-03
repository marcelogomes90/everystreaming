import { BsGithub, BsLinkedin, BsWhatsapp, BsChatSquareTextFill } from "react-icons/bs"
import Container from "./container";
import DivSocial from "./divSocial";
import Icon from "./icon";
import Link from "./link";
import Text from "./text";

function Footer() {
    
    return(
        <Container>
            <Text>© 2022 Copyright: Marcelo Gomes</Text>
            <DivSocial>
                <Link href="https://github.com/marcelogomes90" target="_blank">
                    <Icon><BsGithub size={28}></BsGithub></Icon>
                </Link>
                <Link href="https://www.linkedin.com/in/marcelogomes90/" target="_blank">
                    <Icon><BsLinkedin size={28}></BsLinkedin></Icon>
                </Link>
                <Link href="https://whatsa.me/5581998066509" target="_blank">
                    <Icon><BsWhatsapp size={28}></BsWhatsapp></Icon>
                </Link>
                <Link href="mailto:marcelo.sobrinho@outlook.com" target="_blank">
                    <Icon><BsChatSquareTextFill size={28}></BsChatSquareTextFill></Icon>
                </Link>
            </DivSocial>
        </Container>
    )

}

export default Footer;