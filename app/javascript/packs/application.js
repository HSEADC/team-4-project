// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"

Rails.start()

var active_path = {
  "vacancies": "carrer",
  "": "main",
  "me": "me",
  "yourname": "yourname",
  "bookmarks": "bookmarks",
}

window.onload = activeLink;

function activeLink() {
  var pathname = window.location.pathname.replace('/', '')
  var element = document.querySelector(".menu_items_left .h4." + active_path[pathname])
  if (element != null) {
    element.classList.add("green");
    element.classList.remove("grey3");
  }
}
