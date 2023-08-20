const sendBtn = document.querySelector("#btn");
sendBtn.addEventListener("click", showResults);
let helloMessage;
let nameMessage;
let arrayMessage;

function showResults() {
  getAndValidateNumber();
  getAndValidateName();
  getAndValidateArray();
  alert(`${helloMessage}\n${nameMessage}\nЭлементы массива кратные 3 => ${arrayMessage}`);
}

function getAndValidateNumber() {
  const numberInput = document.getElementById("number");
  const numberFromUser = Number(numberInput.value);
  if (numberFromUser > 7) {
    helloMessage = "Привет";
  } else {
    helloMessage = "";
  }
}

function getAndValidateName() {
  const nameInput = document.querySelector("#name");
  const nameFromUser = nameInput.value;
  const defaultName = "вячеслав";
  if (nameFromUser.toLowerCase() === defaultName) {
    nameMessage = `Привет, ${nameFromUser}`;
  } else {
    nameMessage = "Нет такого имени";
  }
}

function getAndValidateArray() {
  const arrayForMessage = [];
  const arrayInput = document.querySelector("#array");
  const arrayFromUser = arrayInput.value.split(",");

  for (let i = 0; i < arrayFromUser.length; i++) {
    let currentValue = Number(arrayFromUser[i]);
    if (currentValue != 0 && currentValue % 3 === 0) {
      arrayForMessage.push(currentValue);
    }
  }

  if (arrayForMessage.length === 0) {
    arrayMessage = "Пусто";
  } else {
    arrayMessage = arrayForMessage.join(", ");
  }
}