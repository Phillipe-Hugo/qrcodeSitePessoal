var qrcodeElement = document.getElementById('qrcode');

var qrcode = new QRCode(qrcodeElement, {
    text: "https://phca.vercel.app", 
    width: 128,
    height: 128
});