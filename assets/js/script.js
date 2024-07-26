import personas from "./personas.js";
import conversaciones from "./conversaciones.js";
import paginas from "./paginas.js";

const $contact = document.getElementById("contact_list");
const $nav = document.getElementById("nav_list");
$contact.innerHTML = personas
  .map((persona) => {
    return `<li><a class="dropdown-item" href="#">${persona.nombre}</a></li>`;
  })
  .join("");
$nav.innerHTML = paginas
  .map((pagina) => {
    if (pagina.includes("Chat")) {
      return `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">${pagina}</a>
              </li>`;
    }
    return `<li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">${pagina}</a>
              </li>`;
  })
  .join("");
