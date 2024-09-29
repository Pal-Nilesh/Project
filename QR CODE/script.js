let QRCODE = document.querySelector(".QR");
let text = document.querySelector(".text");
let image = document.querySelector(".image");

function generateqr() {
  if (text.value.length > 0) {
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    QRCODE.classList.add("show-img");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
}
