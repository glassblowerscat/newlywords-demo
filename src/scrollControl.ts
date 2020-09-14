export const disableContentScroll = () => {
  const scrollY = window.scrollY
  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = "100%"
}

export const enableContentScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ""
  document.body.style.top = ""
  document.body.style.width = ""
  window.scrollTo(0, parseInt(scrollY || "0") * -1)
}
