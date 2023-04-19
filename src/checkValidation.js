function checkValidation(input, condition) {
  const parentElement = input.parentElement;
  const grandParentElement = parentElement.parentElement;
  const errorContent = grandParentElement.children[1];
  let errorMessage;
  let validationResult = false;
  if (!input.value.match(condition)) {
    input.parentElement.classList.add("error");
    errorContent.classList.remove("hidden");
    if (input.id === "first-name" || input.id === "last-name") {
      errorMessage = "Letters only";
    } else if (input.id === "email") {
      errorMessage = "Invalid e-mail";
    } else if (input.id === "register-password") {
      errorMessage =
        "Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.";
    } else if (input.id === "phone-number") {
      if (input.value.length < 5) {
        errorMessage = "Too short number";
      }
    }
    errorContent.textContent = errorMessage;
    validationResult = false;
  } else {
    input.parentElement.classList.add("correct");
    input.parentElement.classList.remove("error");
    errorContent.classList.add("hidden");
    validationResult = true;
  }
  if (input.value.length === 0) {
    input.parentElement.classList.remove("error");
    input.parentElement.classList.remove("correct");
    errorContent.classList.add("hidden");
    validationResult = false;
  }
  return validationResult;
}

export { checkValidation };
