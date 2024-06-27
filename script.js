let btn = document.querySelector(".submit");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  let delbtns = document.createElement("button");
  delbtns.classList.add("delete");
  delbtns.innerText = "Delete";
  li.innerText = inp.value;
  ul.appendChild(li);
  li.appendChild(delbtns);
  inp.value = "";

  delbtns.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
});
