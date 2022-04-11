import React, { useEffect, useRef } from "react";

const Modal = ({ isOpenModal, setIsOpenModal, action, children }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      action(false);
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div ref={wrapperRef} value={isOpenModal}>
      {children}
    </div>
  );
};

export default Modal;
