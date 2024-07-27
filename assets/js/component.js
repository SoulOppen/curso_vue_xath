const personaDropDown = (persona) =>
  `<li><a class="dropdown-item" href="#">${persona.nombre}</a></li>`;
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
export { personaDropDown, pagina };
