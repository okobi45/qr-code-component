var qrcode = null;

function generateQRCode() {
    var text = document.getElementById("text-input").value;

    if (text !== "") {
        if (qrcode !== null) {
            qrcode.clear();
        }

        qrcode = new QRCode(document.getElementById("qrcode"), {
            text: text,
            width: 128,
            height: 128
        });

        document.getElementById("generate-another").style.display = "block";
    }
}

function generateAnotherQRCode() {
    document.getElementById("text-input").value = "";
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("generate-another").style.display = "none";
    qrcode = null;
}