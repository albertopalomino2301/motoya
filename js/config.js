/*
  ─── CONFIGURACIÓN DE LA WEB DE MOTOYA ──────────────────────────────────────
  Cambia aquí y se actualizan TODAS las páginas. Lo que dejes vacío ("") no
  aparece en la web.
*/
window.MOTOYA = {
  // Servidor (para el Libro de Reclamaciones)
  API_URL: "https://motoya-api-srcn.onrender.com",

  // Dónde se descarga la app (por ejemplo, el enlace de GitHub Releases)
  APK_URL: "https://github.com/albertopalomino2301/motoya/releases/latest/download/MotoYa.apk",

  // Contacto oficial de MotoYa (usa el chip del negocio, no tu número personal)
  WHATSAPP: "",          // con código de país y sin "+", ej. "51987654321"
  EMAIL:    "",          // ej. "hola@motoya.pe"

  // Redes sociales: pega el enlace completo de cada página cuando la crees
  SOCIAL: {
    facebook:  "",
    instagram: "",
    tiktok:    "",
    x:         "",
    youtube:   "",
  },

  // Datos de la empresa (obligatorios en el Libro de Reclamaciones cuando tengas RUC)
  EMPRESA: {
    razonSocial: "",
    ruc:         "",
    direccion:   "Huamanga, Ayacucho, Perú", // domicilio legal: solo sale en el Libro de Reclamaciones y en Privacidad
  },
};
