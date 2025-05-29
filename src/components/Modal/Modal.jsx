import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import { useRef, useEffect } from "react";
// import { useRef } from "react";

function Modal({ isModalOpen, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (isModalOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isModalOpen]);

  return createPortal(
    // <dialog ref={dialog} open={isModalOpen} className={s.modal}>
    <dialog ref={dialog} className={s.modal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
