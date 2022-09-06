const form = document.querySelector("form")
const statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#333";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Wysyłanie wiadomości...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "../contact_form.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("required") != -1 ||
        response.indexOf("valid") != -1 ||
        response.indexOf("failed") != -1
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 5000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};