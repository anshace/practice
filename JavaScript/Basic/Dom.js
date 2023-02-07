// const grandparent = document.querySelector("#grandpa")
const grandparent = document.querySelector(".grandpa")

// console.log(grandparent)
grandparent.style.color = "green"

// get children
grandparent.children[0].style.color = "red"
grandparent.querySelector("#uncle").style.color = "red"

// # get grand-children
const dad = grandparent.children[0]
// grandparent.children[0].children[0].style.color = "blue"
dad.children[0].style.color = "blue"
grandparent.querySelector(".boycousin").style.color = "blue"

// # Get sibbling
const sibbling2 = dad.nextElementSibling
sibbling2.style.color = "gold"
const sibbling1 = sibbling2.previousElementSibling
sibbling1.style.color = "grey"

// const boy = document.querySelector(".boychild")
const boy = document.querySelector("#boychild")
console.log(boy.parentElement)

// boy.parentElement.style.color = "brown"
boy.closest("#dad").style.color = "brown"
// boy.parentElement.parentElement.style.color = "grey"
boy.closest(".grandpa").style.color = "grey"

// cannot acess as it is sibling of parent
// boy.closest("#uncle").style.color = "grey"
