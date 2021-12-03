import {PERSONA_FROM_CODIGO} from "../src/database";

function getParamByName(paramName){
    let paramValue = "";
    const lista_temp = location.search.substring(1).split("&");
    for(let i = 0; i < lista_temp.length; i++){
        const tempo = lista_temp[i].split("=");
        if(tempo[0]===paramName) paramValue = tempo[1]
    }
    return paramValue
}

jQuery('#qrcodeTable').qrcode({
    //Colocamos el URL de la pagina actual
    //text: "https://gis-minsa-gob-pe-02.github.io/CarneVacunacion/cartillas/saul.html",
    text: window.location.href,
    width: 185,
    height: 185,
    margin: "0px",
});
jQuery('#qrcodeDesktop').qrcode({
    // text: "https://gis-minsa-gob-pe-02.github.io/CarneVacunacion/cartillas/saul.html",
    text: window.location.href,
    width: 245,
    height: 245,
    margin: "0px",
});

var dt = new Date();
const fechaHora = (("0" + dt.getDate()).slice(-2)) + "/" +
    (("0" + (dt.getMonth() + 1)).slice(-2)) + "/" + (dt.getFullYear()) + " " +
    (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
document.getElementById("datetime").innerHTML = fechaHora;
document.getElementById("fecha-emision").innerHTML = fechaHora;

let codigo = getParamByName("codigo");

document.getElementById("nombre").innerHTML = PERSONA_FROM_CODIGO.GET_NOMBRE_FROM_CODIGO(codigo);
document.getElementById("dni").innerHTML = PERSONA_FROM_CODIGO.GET_DNI_FROM_CODIGO(codigo);
document.getElementById("fechaNac").innerHTML = PERSONA_FROM_CODIGO.GET_FECHA_NAC_FROM_CODIGO(codigo);
document.getElementById("sexo").innerHTML = PERSONA_FROM_CODIGO.GET_SEXO_FROM_CODIGO(codigo);

document.getElementById("fechaDosis1").innerHTML = PERSONA_FROM_CODIGO.GET_FECHA_DOSIS_1_FROM_CODIGO(codigo);
document.getElementById("fabriLote1").innerHTML = PERSONA_FROM_CODIGO.GET_FABRI_LOTE_1_FROM_CODIGO(codigo);
document.getElementById("lugarVac1").innerHTML = PERSONA_FROM_CODIGO.GET_LUGAR_VAC_1_FROM_CODIGO(codigo);

document.getElementById("fechaDosis2").innerHTML = PERSONA_FROM_CODIGO.GET_FECHA_DOSIS_2_FROM_CODIGO(codigo);
document.getElementById("fabriLote2").innerHTML = PERSONA_FROM_CODIGO.GET_FABRI_LOTE_2_FROM_CODIGO(codigo);
document.getElementById("lugarVac2").innerHTML = PERSONA_FROM_CODIGO.GET_LUGAR_VAC_2_FROM_CODIGO(codigo);