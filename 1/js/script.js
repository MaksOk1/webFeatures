/**
 * 
 * @param {number} value1 - The first value
 * @param {number} value2 - The secound value
 * @returns {string} The result of addition to value1 value2
 * 
 * 
 * @example
 * const a = 11;
 * const b = 1;
 * 
 * const result = addNum(a, b);
 * console.log(result);
 * // Logs 12
 */
function addNum(value1, value2) {
   return value1 + value2;
}

/**
 * 
 * @param {number} value1 - The first value
 * @param {number} value2 - The secound value
 * @returns {string} The result of substraction from value1 value2
 * 
 * 
 * @example
 * const a = 12;
 * const b = 1;
 * 
 * const result = substractNum(a, b);
 * console.log(result);
 * // Logs 11
 */
function substractNum(value1, value2) {
   return value1 - value2;
}

/**
 * 
 * @param {*} value1 - The first value
 * @param {number} value2 - The secound value
 * @returns {string} The result of multiplying value1 and value2
 * 
 * @example
 * const a = 9;
 * const b = 3;
 * 
 * const result = multiplyNum(a, b);
 * console.log(result);
 * // Logs 27
 */
function multiplyNum(value1, value2) {
   return value1 * value2;
}

/**
 * 
 * @param {number} value1 - The first value
 * @param {number} value2 - The secound value
 * @returns {string} The result of dividing value1 and value2
 * 
 * 
 * @example
 * const a = 9;
 * const b = 1;
 * 
 * const result = divideNum(a, b);
 * console.log(result);
 * // Logs 9
 * 
 * @example
 * const a = 9;
 * const b = 0;
 * 
 * const result = divideNum(a, b);
 * console.log(result);
 * // Logs "Dividing by zero is surreal."
 */
function divideNum(value1, value2) {
   return (value2 != 0) ? (value1 + value2)
      : console.log("Dividing by zero is surreal.");
}

const user = {
   name: 'Maksym',
   age: 17,
   lang: "uk"
}

const translation = {
   greetings: "Привіт! Моє ім'я ",
   userName: "Максим"
}

function customization(lang) {
   if (lang == "uk") {
      document.body.lang = "uk";
   } else {
      document.body.lang = "en";
   }

   language(lang);
}

elements = document.body.querySelectorAll("p#name");

function language(lang) {
   if (lang == "uk") {
      document.querySelector("#name").textContent = translation.greetings + translation.userName;
   } else {
      document.querySelector("#name").textContent += user.name;
   }
}

customization(user.lang);