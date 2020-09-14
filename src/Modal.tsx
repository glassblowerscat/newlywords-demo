import React, { useEffect } from "react"
import { CloseIcon } from "./CloseIcon"
import { useModals } from "./ModalContext"
import { enableContentScroll } from "./scrollControl"
import styles from "./Modal.module.css"

type ModalProps = {
  modalId: number
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { modalId, children } = props

  useEffect(() => {
    return () => enableContentScroll()
  }, [])

  const { toggleModal, getModalStatus } = useModals()
  const modal = getModalStatus(modalId)

  if (!modal) return null

  const handleCloseButtonClick = () => {
    toggleModal(modalId)
  }

  const { isOpen } = modal

  const containerClassName = `${styles["modal-container"]}${
    isOpen ? ` ${styles.visible}` : ""
  }`

  const bodyClassName = `${styles["modal-body"]}${
    isOpen ? ` ${styles.visible}` : ""
  }`

  return (
    <div className={containerClassName}>
      <div
        className={styles["modal-mask"]}
        onClick={() => toggleModal(modalId)}
      />
      <div className={bodyClassName}>
        <button
          className={styles["modal-close-icon"]}
          onClick={handleCloseButtonClick}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}
