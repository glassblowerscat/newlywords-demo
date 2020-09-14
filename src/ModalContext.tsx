import React, { createContext, useContext, useCallback, useState } from "react"
import { disableContentScroll } from "./scrollControl"

export interface Modal {
  id: number
  isOpen: boolean
  name: string
}

// Add to this any time a new use case arises
const MODALS: Modal[] = [
  {
    id: 1,
    isOpen: false,
    name: "main",
  },
]

interface ModalContext {
  modals: Modal[]
  getModalStatus: (id: number) => Modal | undefined
  toggleModal: (id: number) => void
}

const initialContext = {
  modals: MODALS,
  getModalStatus: (id: number) => ({ id: 0, isOpen: false, name: "" }),
  toggleModal: (id: number) => {
    return
  },
}

const ModalContext = createContext<ModalContext>(initialContext)

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modals, setModals] = useState<Modal[]>(MODALS)

  const getModalStatus = useCallback(
    (id: number): Modal | undefined => {
      const modal = modals.find((modal) => modal.id === id)
      return modal ?? undefined
    },
    [modals]
  )

  const toggleModal = useCallback(
    (id: number) => {
      const modalIndex = modals.findIndex((modal) => modal.id === id)
      if (modalIndex >= 0) {
        const updatedModal = {
          ...modals[modalIndex],
          isOpen: !modals[modalIndex].isOpen,
        }
        const updatedModals = [
          ...modals.slice(0, modalIndex),
          updatedModal,
          ...modals.slice(modalIndex + 1),
        ]
        setModals(updatedModals)
        if (updatedModal.isOpen) {
          disableContentScroll()
        }
      } else {
        throw new Error("Could not find this modal")
      }
    },
    [modals]
  )

  return (
    <ModalContext.Provider value={{ modals, getModalStatus, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModals = () => useContext(ModalContext)
