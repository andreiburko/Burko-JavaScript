function getAndValidateNumber() {
  let numberFromUser;
  numberFromUser = Number(prompt("Введите число", ""));
  if (numberFromUser > 7) {
    alert("Привет");
  }
}
getAndValidateNumber();

function getAndValidateName() {
  const defaultName = "вячеслав";
  let nameFromUser;
  let message;
  nameFromUser = prompt("Введите имя", "");
  if (nameFromUser != null && nameFromUser.toLowerCase() === defaultName) {
    message = `Привет, ${nameFromUser}`;
  } else {
    message = "Нет такого имени";
  }
  alert(message);
}
getAndValidateName();

function getAndVerifyArray() {
  let stringFromUser;
  const resultArray = [];
  stringFromUser = String(prompt("Введите числа разделяя их запятыми для наполнения массива", ""));
  const arrayFromString = stringFromUser.split(",");

  for (let i = 0; i < arrayFromString.length; i++) {
    let currentValue = Number(arrayFromString[i]);
    if (currentValue != 0 && currentValue % 3 === 0) {
      resultArray.push(currentValue);
    } 
  }

  alert(`Элементы массива кратные 3: ${resultArray.join(", ")}`);
}
getAndVerifyArray();