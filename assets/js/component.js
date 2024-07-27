const personaDropDown = (persona) =>
  `<li><div>
<img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="img">
<div>${persona.sobrenombre ?? persona.nombre + " " + persona.apellido}</div>
</div></li>`;
const chatPersona = (persona) =>
  `<li><div>
<img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="img">
<div>${persona.sobrenombre ?? persona.nombre + " " + persona.apellido}</div>
</div></li>`;
const pagina = (pagina, active = false) => {
  if (active) {
    return `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">${pagina}</a>
              </li>`;
  } else {
    return `<li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">${pagina}</a>
              </li>`;
  }
};
export { personaDropDown, pagina, chatPersona };
