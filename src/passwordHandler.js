function showPassword(password) {
  if (password.value.length === 0) return;
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function passwordPreviewHandler(password, button) {
  if (password.value.length > 0) {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }
}

export { showPassword, passwordPreviewHandler };
