const listDOM = document.querySelector("#list")

listDOM.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked")
  }
})

function newElement() {
  const inputValue = document.querySelector("#task").value

  if (!inputValue.trim()) {
    $(".error").toast("show")
    document.querySelector("#task").value = ""
    return
  } else if (inputValue.trim()) {
    $(".success").toast("show")
  }

  const liDOM = document.createElement("li")
  liDOM.textContent = inputValue
  listDOM.appendChild(liDOM)

  const span = document.createElement("SPAN")
  span.className = "close btn"
  span.style.height = "100%"
  span.textContent = "\u00D7"
  liDOM.appendChild(span)

  span.onclick = () => {
    liDOM.style.display = "none"
  };

  document.querySelector("#task").value = ""
}