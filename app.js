const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const createBtn = document.querySelector(".createBtn");
const inputs = document.querySelectorAll("input");
const list = document.querySelector(".list");

getList();

createBtn.addEventListener("click", () => {
  addList();
});

function addList() {
  if (input1.value !== "" && input2.value !== "" && input3.value !== "") {
    let Obj = {
      name: input1.value,
      kv: input2.value,
      person: input3.value,
    };
    const local = JSON.parse(localStorage.getItem("list")) || [];
    local.push(Obj);
    localStorage.setItem("list", JSON.stringify(local));

    for (let i of inputs) {
      i.value = "";
    }
    getList();
  }
}

function getSum(num1, person1) {
  return (+num1 * 70) / +person1;
}

function getList() {
  list.innerHTML = "";
  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.forEach((element) => {
    const box = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const h3 = document.createElement("h3");

    h1.innerHTML = element.name;
    p.innerText = "выдача наличных";
    span.innerHTML = getSum(element.kv, element.person);
    h3.innerText = "cом";

    let str = String(span);
    str.slice(0, 6);

    list.append(box);
    box.append(h1);
    box.append(p);
    box.append(span);
    box.append(h3);
  });
}
