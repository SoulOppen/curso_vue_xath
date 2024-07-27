import { conversaciones, paginas, personas } from "./const.js";
import { personaDropDown, pagina as f_pagina } from "./component.js";
const $contact = document.getElementById("contact_list");
const $nav = document.getElementById("nav_list");
$contact.innerHTML = personas
  .map((persona) => personaDropDown(persona))
  .join("");
$nav.innerHTML = paginas
  .map((pagina) => {
    if (pagina.includes("Chat")) {
      return f_pagina(pagina, true);
    }
    return f_pagina(pagina);
  })
  .join("");
