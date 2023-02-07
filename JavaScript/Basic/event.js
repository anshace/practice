const input = document.querySelector("[data-input]")
const btn = document.querySelector("[data-btn]")

btn.addEventListener("click", (e) => {
  console.log(e)
  console.log("clicked")
})

input.addEventListener("change", () => {
  console.log("Changed")
})

input.addEventListener("input", () => {
  console.log("Input recieved")
})

// form always send so it will refresh the page
// e.preventDefault()
const form = document.querySelector("[data-form]")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("submitted form")
})

const link = document.querySelector("a")

link.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Prevented log to opening ")
})

link.addEventListener("focus", (e) => {
  e.preventDefault()
  console.log("Got the Focus ")
})

link.addEventListener("blur", (e) => {
  e.preventDefault()
  console.log("Left the focus ")
})

addEventListener("resize", () => console.log("Window is resized"))
// window.addEventListener("resize", () => console.log("Window is resized"))

// function printcl() {
//   console.log("Clicked")
// }

// btn.addEventListener("click", console.log("Clwed"), printcl)
