"use strict";
console.log("hello");
const addTaskBox = document.querySelector("#taskbox");
const addTaskBtn = document.querySelector(".addTaskButton");
const addTaskRow = document.querySelector(".list-items");

addTaskBtn.addEventListener("click", function () {
  if (addTaskBox.value === "") alert("add something first");
  else {
    let li = document.createElement("li");
    li.innerHTML = addTaskBox.value;
    addTaskRow.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  addTaskBox.value = "";
  localSave();
});

addTaskRow.addEventListener("click", function (e) {
  console.log("list");
  console.log(e);
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
    localSave();
  } else if (e.target.tagName.toLowerCase() === "span") {
    e.target.parentElement.remove();
    localSave();
  }
});

function localSave() {
  localStorage.setItem("data", addTaskRow.innerHTML);
}

function localDisplay() {
  addTaskRow.innerHTML = localStorage.getItem("data");
}

localDisplay();