import { conversaciones, paginas, personas } from "./const.js";
import {
  personaDropDown,
  chatPersona,
  pagina as f_pagina,
} from "./component.js";
const $contact = document.getElementById("contact_list");
const $contactBig = document.getElementById("contact_list-big");
const $nav = document.getElementById("nav_list");
$contact.innerHTML = personas
  .map((persona) => personaDropDown(persona))
  .join("");
$contactBig.innerHTML = personas
  .map((persona) => chatPersona(persona))
  .join("");
$nav.innerHTML = paginas
  .map((pagina) =>
    pagina.includes("Chat") ? f_pagina(pagina, true) : f_pagina(pagina)
  )
  .join("");
