function openCity(evt, cityName) {
  // Declare all variables
  var i, whowhat_content, whowhat__option

  // Get all elements with class="whowhat_content" and hide them
  whowhat_content = document.getElementsByClassName("whowhat_content")
  for (i = 0; i < whowhat_content.length; i++) {
    whowhat_content[i].style.display = "none"
  }

  // Get all elements with class="whowhat__option" and remove the class "active"
  whowhat__option = document.getElementsByClassName("whowhat__option")
  for (i = 0; i < whowhat__option.length; i++) {
    whowhat__option[i].className = whowhat__option[i].className.replace(" active", "")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block"
  evt.currentTarget.className += " active"
}

document.getElementById("defaultOpen").click()
