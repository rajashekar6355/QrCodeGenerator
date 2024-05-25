let imgBox = document.getElementById("imgbox")
let qrImg = document.getElementById("qrimg")
let qrText = document.getElementById("txtinput")


function Qrgenerator() {
    if (qrText.value.length > 0) {

        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
    if(qrText.value.length == 0){
        qrImg.src = "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iMTc3LWNhcmQtd2hpdGUtMTdhLnBuZw.png"
        
    }

}