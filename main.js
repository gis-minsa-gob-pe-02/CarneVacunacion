import {datosPersonales} from "./src/database";
var ul = document.createElement('ul');
for (let persona of datosPersonales){
    // Create anchor element.
    var li = document.createElement('li');
    var a = document.createElement('a');
    // Create the text node for anchor element.
    var link = document.createTextNode(persona.nombre);
    // Append the text node to anchor element.
    a.appendChild(link);
    // Set the title.
    a.title = persona.nombre;
    // Set the href property.
    //a.href = "src/template/templateAndroid.html?codigo=" + persona.codigo;
    a.href = "publico/certificado/index.html?codigo=" + persona.codigo;
    li.append(a);
    // sidebar.append(a);
    // Append the anchor element to the body.
    ul.append(li)

}
document.body.appendChild(ul);