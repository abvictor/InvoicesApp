import React, { useState } from "react";
import Modal from "react-modal";
import { ModalProps } from "../../@types/themes";

const NewInvoiceModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      height: "100vh",
      maxWidth: "800px",
      backgroundColor: "#FFF",
      position: "relative",
      right: "38rem",
      overflow: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={onRequestClose}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default NewInvoiceModal;
