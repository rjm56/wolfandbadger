import { Background, ModalPanel, Close } from "./styles";

const Modal = ({ children, onClose }) => {
  return (
    <Background>
      <ModalPanel>
        <Close onClick={onClose}>close</Close>
        {children}
      </ModalPanel>
    </Background>
  );
};

export default Modal;
