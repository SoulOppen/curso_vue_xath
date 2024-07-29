import { conversaciones, paginas, personas } from "./const.js";
import {
  personaDropDown,
  chatPersona,
  pagina as f_pagina,
  mensajeItem,
} from "./component.js";
const $contact = document.getElementById("contact_list");
const $contactBig = document.getElementById("contact_list-big");
const $nav = document.getElementById("nav_list");
const $mensaje = document.getElementById("mensaje");
const $name = document.getElementById("name");
const $foto = document.getElementById("foto");
const mensajePersona = (nombre) => {
  return conversaciones.filter((item) => item.nombre === nombre)[0].mensajes;
};

const lastMessageHour = (nombre) => {
  let mensajesPersona = mensajePersona(nombre);
  if (!mensajesPersona || mensajesPersona.length === 0) {
    return new Date(0);
  }
  return new Date(mensajesPersona.at(-1).fechaHora);
};
const leido = (nombre) => {
  let mensajesPersona = mensajePersona(nombre);
  return mensajesPersona.at(-1).leido ?? true;
};
const stringFecha = (fecha) =>
  new Date(fecha)
    .toLocaleString("es-CL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replaceAll("-", "/")
    .replaceAll(",", "");
let personasSort = personas.toSorted(
  (a, b) => lastMessageHour(b.nombre) - lastMessageHour(a.nombre)
);
$contact.innerHTML = personasSort
  .map((persona) =>
    personaDropDown(
      persona,
      stringFecha(lastMessageHour(persona.nombre), leido(persona.nombre))
    )
  )
  .join("");
$contactBig.innerHTML = personasSort
  .map((persona) => {
    return chatPersona(
      persona,
      stringFecha(lastMessageHour(persona.nombre)),
      leido(persona.nombre)
    );
  })
  .join("");
$nav.innerHTML = paginas
  .map((pagina) =>
    pagina.includes("Chat") ? f_pagina(pagina, true) : f_pagina(pagina)
  )
  .join("");
$mensaje.innerHTML = mensajePersona(personasSort[0].nombre)
  .map((mensaje) => mensajeItem(mensaje))
  .join("");
$name.innerText =
  personasSort[0].sobrenombre ??
  personasSort[0].nombre + " " + personasSort[0].apellido;
$foto.setAttribute("src", personasSort[0].foto);
