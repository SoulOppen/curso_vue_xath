const personaDropDown = (persona) =>
  `<li class="g-0 p-0"><div class="d-flex contactoSmall">
<div><img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="contactoSmall__img rounded-circle"></div>
<div class="contactoSmall__main">
<div class="contactoSmall__nombre">${
    persona.sobrenombre ?? persona.nombre + " " + persona.apellido
  }</div>
  <div class="contactoSmall__fecha">17/8/2009 17:34</div>
</div>
</div></li>`;
const chatPersona = (persona) =>
  `<li class="g-0"><div class="contactoBig">
    <img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="contactoBig__img rounded-circle">
  <div class="mx-4 contactoBig__main">
<div class="contactoBig__nombre">${
    persona.sobrenombre ?? persona.nombre + " " + persona.apellido
  }</div>
  <div class="contactoBig__fecha">15/6/2024 15:54</div>
  </div>
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
