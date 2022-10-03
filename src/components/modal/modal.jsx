import Container from "./container";
import { AiOutlineClose } from "react-icons/ai"
import CloseButton from "./divClose";

function Modal(props) {

    const closeModal = () => {
        props.setModalOpen(false);
    }

    return(
        <Container>
            <CloseButton onClick={closeModal}>
                <AiOutlineClose size={28}></AiOutlineClose>
            </CloseButton>
        </Container>
    )

}

export default Modal;