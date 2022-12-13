document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputBox = document.getElementsByTagName('input')[1]
  inputBox.addEventListener("click", boxClick, false)
  function boxClick (event) {
    event.preventDefault()    

  }
});
console.log(inputBox);
