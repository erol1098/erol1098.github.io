"use strict";
//* Variables
const userName = document.querySelector("#first-name");
const userEntryTitle = document.querySelector("#title");
const userEntry = document.querySelector("#desc");
const userWarn = document.querySelector(".main__form__warn");
const submitBtn = document.querySelector(".btn");

const blog = document.querySelector(".main__blogs");
const blogName = document.querySelector(".main__blogs__entry1--name");
const blogTitle = document.querySelector(".main__blogs__entry1__entry--title");
const blogDescription = document.querySelector(
  ".main__blogs__entry1__entry--description"
);

let blogCounter;
localStorage.getItem("blogCounter")
  ? (blogCounter = localStorage.getItem("blogCounter"))
  : (blogCounter = 1);

document.querySelector(".main").addEventListener("click", (e) => {
  if (e.target.classList.contains("inputs")) {
    userWarn.classList.add("hidden");
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(blogCounter);
  if (userName.value && userEntryTitle.value && userEntry.value) {
    const newEntry = document.createElement("div");
    newEntry.innerHTML = `<div class="main__blogs__entry1--photo"><img src="./img/${blogCounter}.jpg" alt="photo">
  <label for="main__blogs__entry1--photo" class="main__blogs__entry1--name">${userName.value}</label></div>
  <div class="main__blogs__entry1__entry">
    <p class="main__blogs__entry1__entry--title">${userEntryTitle.value}</p>
    <p class="main__blogs__entry1__entry--description">${userEntry.value}</p>
  </div>`;
    newEntry.classList.add(`main__blogs__entry1`);
    blog.append(newEntry);
    blogCounter++;
    blogCounter == 11 ? (blogCounter = 1) : blogCounter;
    localStorage.setItem("blogCounter", blogCounter);
    userName.value = "";
    userEntryTitle.value = "";
    userEntry.value = "";
  } else {
    userWarn.classList.remove("hidden");
  }
});
