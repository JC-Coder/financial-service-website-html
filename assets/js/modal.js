let modal = document.querySelector("#modal");
let closeModalBtn = modal.querySelector(".close");
let modalToggle = document.querySelectorAll(".modalToggle");

let modalMessage = modal.querySelector(".message").textContent;

closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("closed");
});

modalToggle.forEach((item) => {
  item.addEventListener("click", () => {
    // validating inputs
    let inputFields = item.parentElement.querySelectorAll("input");
    let modalMessageElement = modal.querySelector(".message");

    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value < 1) {
        modal.querySelector("img").style.display = "none";
        modalMessageElement.textContent = "Kindly fill all fields to proceed";
        modalMessageElement.style.color = "red";
        modal.classList.toggle("closed");
        console.log(inputFields[i]);
        console.log(modal.innerHTML);
        return;
      }
    }

    modalMessageElement.textContent = modalMessage;
    modal.querySelector("img").style.display = "inline-block";
    modalMessageElement.style.color = "green";
    modal.classList.toggle("closed");
    item.parentElement.reset();
  });
});
