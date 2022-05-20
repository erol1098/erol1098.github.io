"use strict";
const mail = document.querySelector(".mail");
const warn = document.querySelector(".main__entry-warning");
const btn = document.querySelector(".btn-enter");

btn.addEventListener("click", (e) => {
  const entry = mail.value;
  if (entry.includes("@")) {
    const prefix = entry.slice(0, entry.indexOf("@"));
    const domain = entry.slice(entry.indexOf("@") + 1);

    const prefixRegex = /[^a-zA-Z0-9._-]/;
    const domainRegex = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    prefix.search(prefixRegex) === -1 && domain.search(domainRegex) === 0
      ? (warn.textContent = "Valid Email")
      : (warn.textContent = "Invalid Email");

    prefix.search(prefixRegex) === -1 && domain.search(domainRegex) === 0
      ? warn.classList.add("text-bg-success")
      : warn.classList.add("text-bg-danger");
    console.log(prefix.search(prefixRegex));
    console.log(domain.search(domainRegex));
  } else {
    warn.textContent = "Invalid Email";
    warn.classList.add("text-bg-danger");
  }
});

word.addEventListener("focus", (e) => {
  warn.textContent = "";
  warn.classList.remove("text-bg-success");
  warn.classList.remove("text-bg-danger");
});
