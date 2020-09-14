import React, { useState } from "react"
import { Button } from "./Button"
import { Modal } from "./Modal"
import { ModalGraphic } from "./ModalGraphic"
import styles from "./MainModal.module.css"

export const MainModal = () => {
  const [activeDot, setActiveDot] = useState(0)
  return (
    <Modal modalId={1}>
      <ModalGraphic />
      <h1 className={styles.header}>Let's get going!</h1>
      <p className={styles.content}>
        Follow these tips to get your project off to a great start and create a
        truly memorable book!
      </p>
      <div className={styles["progress-dots"]}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveDot(index)}
              className={`${styles["progress-dot"]}${
                activeDot === index ? ` ${styles.active}` : ""
              }`}
            />
          ))}
      </div>
      <Button
        className={styles.button}
        onClick={() => console.log("Perform next action")}
      >
        Next
      </Button>
    </Modal>
  )
}
