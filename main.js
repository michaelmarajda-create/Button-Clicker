function Login_logout(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
function removeButton(element) {
    element.remove();
}

function alertLike(element) {
    alert("Ninja was liked");
}