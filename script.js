// generating random number 

// const genOtp = (otpLength)=>{
//   otp ="";

//   for(let i; i<otpLength; i++){
//     otp += Math.floor(Math.random()*10);
//   };

//   return Number(otp);
// }

const  genOtp = (otpLength)=> {
  otp ="";

  for(let i = 0; i<otpLength ; i++){
    otp+= Math.floor(Math.random()*10);
  }

  return Number(otp);
}

console.log("generated otp - " , genOtp(6));


const inputs = document.querySelectorAll("input"),
  buttons = document.querySelector("button");

// console.log(inputs);

// focus on first input box on reload
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    // if the current input has more than 1 character erase the value

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // If the currentInput is not empty then enable the nextInput

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // when backspace is pressed

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }

    // making verify button active and inactive when the last input is done

    if (!inputs[3].disabled && inputs[3].value !== "") {
      buttons.classList.add("active");
      return;
    }
    buttons.classList.remove("active");
  });
});
