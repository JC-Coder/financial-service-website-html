let modal = document.querySelector("#modal");
let closeModalBtn = modal.querySelector(".close");
let modalToggle = document.querySelectorAll(".modalToggle");

let modalMessage = modal.querySelector('.message').textContent;

closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("closed");
});

modalToggle.forEach((item) => {
  item.addEventListener("click", () => {
    // validating inputs
    let inputFields = item.parentElement.querySelectorAll("input");

    for(let i = 0; i < inputFields.length; i++){
        if (inputFields[i].value < 1) {
            modal.querySelector('img').style.display = "none";
            modal.querySelector('.message').textContent = "Kindly fill all fields to proceed";
            modal.querySelector('.message').style.color = "red";
            modal.classList.toggle("closed");
            console.log(inputFields[i])
            console.log(modal.innerHTML)
            return;
        }
    }


    modal.querySelector('.message').textContent = modalMessage;
    modal.querySelector('img').style.display = "inline-block";
    modal.querySelector('.message').style.color = 'green';
    modal.classList.toggle("closed");
    item.parentElement.reset();
  });
});
