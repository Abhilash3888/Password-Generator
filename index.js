const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let pwdButton1El = document.querySelector(".pwd-btn-1");
let pwdButton2El = document.querySelector(".pwd-btn-2");
let genPwdButton = document.getElementById("password");

genPwdButton.addEventListener("click", function () {

    pwdButton1El.textContent = "";
    pwdButton2El.textContent = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        pwdButton1El.textContent += characters[randomIndex1];
        pwdButton2El.textContent += characters[randomIndex2];
    }
});

function copyBtn() {

    let pwd1 = pwdButton1El.innerHTML;
    let pwd2 = pwdButton2El.innerHTML;
    let pwd = pwd1 + " " + pwd2;
    // console.log(pwd);
    navigator.clipboard.writeText(pwd);

}


