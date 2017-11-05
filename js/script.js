const content = document.getElementById("content")
const menuContent = document.getElementById("menu-content")
const menuTab = document.getElementById("menu")
const aboutTab = document.getElementById("about")
const directionsTab = document.getElementById("directions")
const saladsTab = document.getElementById("salad-tab")
const pizzaTab = document.getElementById("pizza-tab")




saladsTab.addEventListener("click", function() {
  menuContent.innerHTML = ""
  menuContent.innerHTML = saladsPage
})

pizzaTab.addEventListener("click", function() {
  menuContent.innerHTML = ""
  menuContent.innerHTML = pizzaPage
})