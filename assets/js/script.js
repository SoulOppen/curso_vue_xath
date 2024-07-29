import { conversaciones, paginas, personas } from "./const.js";
import {
  personaDropDown,
  chatPersona,
  pagina as f_pagina,
} from "./component.js";
const $contact = document.getElementById("contact_list");
const $contactBig = document.getElementById("contact_list-big");
const $nav = document.getElementById("nav_list");
const $mensaje = document.getElementById("mensaje");
const mensajePersona = (nombre) => {
  return conversaciones.filter((item) => item.nombre === nombre)[0];
};

const lastMessageHour = (nombre) => {
  let mensajesPersona = mensajePersona(nombre);
  if (!mensajesPersona || mensajesPersona.mensajes.length === 0) {
    return new Date(0);
  }
  return new Date(mensajesPersona.mensajes.at(-1).fechaHora);
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
    personaDropDown(persona, stringFecha(lastMessageHour(persona.nombre)))
  )
  .join("");
$contactBig.innerHTML = personasSort
  .map((persona) =>
    chatPersona(persona, stringFecha(lastMessageHour(persona.nombre)))
  )
  .join("");
$nav.innerHTML = paginas
  .map((pagina) =>
    pagina.includes("Chat") ? f_pagina(pagina, true) : f_pagina(pagina)
  )
  .join("");
$mensaje.innerHTML = conversaciones[0].mensajes
  .map(
    (mensaje) =>
      `<li class="d-flex w-100 ${
        mensaje.tipo == "enviado"
          ? "justify-content-end"
          : "justify-content-start"
      } "><p class="p-2 ${
        mensaje.tipo == "enviado" ? "bg-primary" : "bg-warning"
      } m-2 rounded-3">${mensaje.texto}</p></li>`
  )
  .join("");
