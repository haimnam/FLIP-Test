import React, { useEffect, useRef } from "react";
import styles from "../scss/App.module.scss";

const Modal = ({
  clickBackground,
  setIsEllipsisClicked,
  isOpenModal,
  setIsOpenModal,
  setIsEllipsis,
  children,
}) => {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsOpenModal(false);
      clickBackground();
      setIsEllipsisClicked(false);
      setIsEllipsis(false);
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div ref={wrapperRef} value={isOpenModal} className={styles.modal}>
      {children}
    </div>
  );
};

export default Modal;
