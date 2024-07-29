const conversaciones = [
  {
    nombre: "Juan",
    mensajes: [
      {
        tipo: "enviado",
        texto: "Hola, ¿cómo estás?",
        fechaHora: "2024-07-25T10:00:00",
      },
      {
        tipo: "recibido",
        texto: "Estoy bien, gracias. ¿Y tú?",
        fechaHora: "2024-07-25T10:05:00",
      },
      {
        tipo: "enviado",
        texto: "Todo bien también. ¿Qué has hecho hoy?",
        fechaHora: "2024-07-25T10:10:00",
      },
      {
        tipo: "recibido",
        texto: "Hoy me levanté temprano y salí a correr.",
        fechaHora: "2024-07-25T10:15:00",
        leido: false,
      },
      {
        tipo: "recibido",
        texto: "¿Tienes planes para el fin de semana?",
        fechaHora: "2024-07-25T10:20:00",
        leido: false,
      },
    ],
  },
  {
    nombre: "María",
    mensajes: [
      {
        tipo: "enviado",
        texto: "Hola María, ¿puedes ayudarme con la tarea?",
        fechaHora: "2024-07-25T11:00:00",
      },
      {
        tipo: "recibido",
        texto: "Claro, ¿qué necesitas?",
        fechaHora: "2024-07-25T11:05:00",
      },
      {
        tipo: "enviado",
        texto: "No entiendo el problema 3 de matemáticas.",
        fechaHora: "2024-07-25T11:10:00",
      },
      {
        tipo: "recibido",
        texto: "Déjame verlo, te ayudo en un momento.",
        fechaHora: "2024-07-25T11:15:00",
      },
      {
        tipo: "enviado",
        texto: "Gracias, me vendría muy bien tu ayuda.",
        fechaHora: "2024-07-25T11:20:00",
      },
      {
        tipo: "recibido",
        texto: "Ya lo tengo, es bastante sencillo en realidad.",
        fechaHora: "2024-07-25T11:25:00",
        leido: false,
      },
      {
        tipo: "recibido",
        texto: "Te lo explico en un momento.",
        fechaHora: "2024-07-25T11:30:00",
        leido: false,
      },
    ],
  },
  {
    nombre: "Carlos",
    mensajes: [
      {
        tipo: "enviado",
        texto: "Hola Carlos, ¿vas a la reunión mañana?",
        fechaHora: "2024-07-25T12:00:00",
      },
      {
        tipo: "recibido",
        texto: "Sí, ahí estaré. ¿A qué hora es?",
        fechaHora: "2024-07-25T12:05:00",
      },
      {
        tipo: "enviado",
        texto: "Es a las 10:00 am.",
        fechaHora: "2024-07-25T12:10:00",
      },
      {
        tipo: "recibido",
        texto: "Perfecto, nos vemos allí.",
        fechaHora: "2024-07-25T12:15:00",
        leido: false,
      },
      {
        tipo: "recibido",
        texto: "No olvides llevar los documentos.",
        fechaHora: "2024-07-25T12:20:00",
        leido: false,
      },
    ],
  },
  {
    nombre: "Ana",
    mensajes: [
      {
        tipo: "enviado",
        texto: "Hola Ana, ¿quieres ir al cine esta noche?",
        fechaHora: "2024-07-25T13:00:00",
      },
      {
        tipo: "recibido",
        texto: "Me encantaría, ¿qué película vamos a ver?",
        fechaHora: "2024-07-25T13:05:00",
      },
      {
        tipo: "enviado",
        texto: "Podemos ver la nueva de Marvel.",
        fechaHora: "2024-07-25T13:10:00",
      },
      {
        tipo: "recibido",
        texto: "¡Genial! ¿A qué hora?",
        fechaHora: "2024-07-25T13:15:00",
      },
      {
        tipo: "enviado",
        texto: "A las 8:00 pm. Te recojo a las 7:30.",
        fechaHora: "2024-07-25T13:20:00",
      },
      {
        tipo: "recibido",
        texto: "Perfecto, nos vemos entonces.",
        fechaHora: "2024-07-25T13:25:00",
        leido: false,
      },
    ],
  },
  {
    nombre: "Luis",
    mensajes: [
      {
        tipo: "enviado",
        texto: "Hola Luis, ¿cómo estuvo tu viaje?",
        fechaHora: "2024-07-25T14:00:00",
      },
      {
        tipo: "recibido",
        texto: "Fue increíble, visité muchos lugares interesantes.",
        fechaHora: "2024-07-25T14:05:00",
      },
      {
        tipo: "enviado",
        texto: "Qué bien, me alegro. ¿Tienes fotos?",
        fechaHora: "2024-07-25T14:10:00",
      },
      {
        tipo: "recibido",
        texto: "Sí, te las muestro cuando nos veamos.",
        fechaHora: "2024-07-25T14:15:00",
        leido: false,
      },
      {
        tipo: "recibido",
        texto: "También compré algunos recuerdos.",
        fechaHora: "2024-07-25T14:20:00",
        leido: false,
      },
    ],
  },
];

export default conversaciones;
