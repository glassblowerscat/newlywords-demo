import React from "react"
import { Button } from "./Button"
import { MainModal } from "./MainModal"
import { useModals } from "./ModalContext"

export const Main = () => {
  const { toggleModal } = useModals()
  return (
    <>
      <main
        className="App"
        style={{
          backgroundColor: "#e5e5e5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button onClick={() => toggleModal(1)}>Open modal</Button>
      </main>
      <MainModal />
    </>
  )
}
