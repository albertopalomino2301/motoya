// Aplica la configuración (js/config.js) a todas las páginas
(function () {
  var cfg = window.MOTOYA || {};

  document.querySelectorAll(".js-apk").forEach(function (a) { a.href = cfg.APK_URL || "#"; });

  var wa = (cfg.WHATSAPP || "").replace(/\D/g, "");
  document.querySelectorAll(".js-whatsapp").forEach(function (a) {
    if (!wa) { a.closest("li") ? a.closest("li").remove() : a.remove(); return; }
    a.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent("Hola MotoYa, tengo una consulta");
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll(".js-email").forEach(function (a) {
    if (!cfg.EMAIL) { a.closest("li") ? a.closest("li").remove() : a.remove(); return; }
    a.href = "mailto:" + cfg.EMAIL; a.textContent = cfg.EMAIL;
  });

  // Redes sociales
  var ICONS = {
    facebook:  '<path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z"/>',
    instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8c-.1-1.6-.4-3-1.6-4.2S17.6 2.2 16 2.1C14.4 2 9.6 2 8 2.1c-1.6.1-3 .4-4.2 1.6S2.2 6.4 2.1 8C2 9.6 2 14.4 2.1 16c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.4 0-8zm-2.1 9.7a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.3 3.3 0 0 1 6.2 4.5C7.5 4 10.5 4.1 12 4.1s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z"/>',
    tiktok:    '<path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.3v12.7a2.6 2.6 0 1 1-1.8-2.5V9.9a6 6 0 1 0 5.1 5.8V9.3a7.6 7.6 0 0 0 4.4 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6z"/>',
    x:         '<path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.4L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/>',
    youtube:   '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/>',
  };
  var NAMES = { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok", x: "X", youtube: "YouTube" };
  document.querySelectorAll(".js-social").forEach(function (box) {
    var html = "";
    Object.keys(NAMES).forEach(function (k) {
      var url = (cfg.SOCIAL || {})[k];
      if (url) html += '<a href="' + url + '" target="_blank" rel="noopener" aria-label="MotoYa en ' + NAMES[k] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[k] + "</svg></a>";
    });
    box.innerHTML = html || '<span class="social-empty">Muy pronto en Facebook, Instagram y TikTok.</span>';
  });

  // Datos de la empresa (la dirección legal solo va en el Libro de Reclamaciones y en Privacidad)
  var e = cfg.EMPRESA || {};
  document.querySelectorAll(".js-empresa").forEach(function (el) {
    var parts = [];
    if (e.razonSocial) parts.push(e.razonSocial);
    if (e.ruc) parts.push("RUC " + e.ruc);
    el.textContent = parts.join(" – ");
  });
  document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
