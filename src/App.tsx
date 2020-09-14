import React, { useEffect } from "react"
import WebFontLoader from "webfontloader"
import { Main } from "./Main"
import { ModalContextProvider } from "./ModalContext"
import "./App.css"

const webfontConfig = {
  google: {
    families: ["Assistant", "Sorts Mill Goudy"],
  },
}

function App() {
  useEffect(() => {
    WebFontLoader.load(webfontConfig)
  }, [])
  return (
    <ModalContextProvider>
      <Main />
    </ModalContextProvider>
  )
}

export default App
