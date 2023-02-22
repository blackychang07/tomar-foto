var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (resultados) {

    console.log(resultados);

    var contenido = resultados.results[0][0].transcript;
    console.log(contenido);

    document.getElementById("textbox").innerHTML = contenido;

    hablar(contenido)



    if (contenido.toLowerCase() == "toma mi selfie") {
        hablar("arreglate en 5 segundos voy a tomar una foto");

        setTimeout(tomar_foto, 10000);
    }
}

function hablar(mensaje) {
    var leer_en_voz_alta = window.speechSynthesis;
    var lectura = new SpeechSynthesisUtterance(mensaje)
    lectura.lang = "es-MX"
    leer_en_voz_alta.speak(lectura)
}

var camara = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 260,
    image_format: "jpeg",
    jpeg_quality: 90
})

Webcam.attach(camara)

function tomar_foto() {
    console.log("tomando foto")
    Webcam.snap(function (data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="foto" src="' + data_uri + '"/>';
        guardar()
    });
}

function guardar() {
    link = document.getElementById("link")
    var imagen = document.getElementById("foto").src
    link.href = imagen
    link.click()
}