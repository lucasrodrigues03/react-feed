import ReactModal from "react-modal";
import { X as closeIcon } from "phosphor-react";

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function OpenEndCloseModal({isOpen, onRequestClose}: ModalProps) {
  return (
    <>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      >

      </ReactModal>
    </>
  ) 
}
