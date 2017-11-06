// Append Posts
const content = document.getElementById("content")
const menuContent = document.getElementById("menu-content")

// Top Tabs
const menuTab = document.getElementById("menu")
const aboutTab = document.getElementById("about")
const directionsTab = document.getElementById("directions")

menuTab.addEventListener("click", function() {
  content.innerHTML = "";
  content.innerHTML = menuPage;
})

aboutTab.addEventListener("click", function() {
  content.innerHTML = "";
  content.innerHTML = aboutPage;
})

directionsTab.addEventListener("click", function() {
  content.innerHTML = "";
  content.innerHTML = directionsPage;
})



  // Menu Tabs
  const saladsTab = document.getElementById("salad-tab")
  const pizzaTab = document.getElementById("pizza-tab")
  const pastaTab = document.getElementById("pasta-tab")

  saladsTab.addEventListener("click", function() {
    menuContent.innerHTML = "";
    menuContent.innerHTML = saladsPage;
  });

  pizzaTab.addEventListener("click", function() {
    menuContent.innerHTML = "";
    menuContent.innerHTML = pizzaPage;
  });

  pastaTab.addEventListener("click", function() {
    menuContent.innerHTML = "";
    menuContent.innerHTML = pastaPage;
  })
