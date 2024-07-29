const personaDropDown = (persona, fecha) =>
  `<li class="g-0 p-0" data-nombre="${
    persona.nombre
  }"><div class="contactoSmall p-0 m-0">
<div><img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="contactoSmall__img rounded-circle"></div>
<div class="contactoSmall__main m-2">
<div class="contactoSmall__nombre">${
    persona.sobrenombre ?? persona.nombre + " " + persona.apellido
  }</div>
  <div class="contactoSmall__fecha">${fecha}</div>
</div>
</div></li>`;
const chatPersona = (persona, fecha) =>
  `<li class="g-0" data-nombre="${persona.nombre}"><div class="contactoBig">
    <img src="${persona.foto}" alt="${persona.nombre} ${
    persona.apellido
  }" class="contactoBig__img rounded-circle">
  <div class="mx-4 contactoBig__main">
<div class="contactoBig__nombre">${
    persona.sobrenombre ?? persona.nombre + " " + persona.apellido
  }</div>
  <div class="contactoBig__fecha">${fecha}
    </div>
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
const mensajeItem = (mensaje) =>
  `<li class="d-flex w-100 ${
    mensaje.tipo == "enviado" ? "justify-content-end" : "justify-content-start"
  } "><p class="p-2 ${
    mensaje.tipo == "enviado" ? "bg-primary" : "bg-warning"
  } m-2 rounded-3">${mensaje.texto}</p></li>`;
export { personaDropDown, pagina, chatPersona, mensajeItem };
