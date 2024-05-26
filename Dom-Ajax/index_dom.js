import hamburgerMenu from "./ejerciciosConDom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./ejerciciosConDom/reloj.js";
import { moveBall, shortcuts } from "./ejerciciosConDom/teclado.js";
import countdown from "./ejerciciosConDom/cuenta_regresiva.js";
import scrollTopButton from "./ejerciciosConDom/boton_scroll.js";
import darkTheme from "./ejerciciosConDom/tema_oscuro.js";
import responsiveMedia from "./ejerciciosConDom/objeto_responsive.js";
import responsiveTester from "./ejerciciosConDom/prueba_responsive.js";
import userDeviceInfo from "./ejerciciosConDom/deteccion_dispositivos.js";
import networkStatus from "./ejerciciosConDom/deteccion_red.js";
import webCam from "./ejerciciosConDom/deteccion_webcam.js";
import getGeologation from "./ejerciciosConDom/geolocalizacion.js";
import searchFilters from "./ejerciciosConDom/filtros_busqueda.js";
import draw from "./ejerciciosConDom/sorteo.js";
import slider from "./ejerciciosConDom/carrusel.js";
import scrollSpy from "./ejerciciosConDom/scroll_espia.js";
import smartVideo from "./ejerciciosConDom/video_inteligente.js";
import contactFormValidations from "./ejerciciosConDom/validaciones_formulario.js";
import speechReader from "./ejerciciosConDom/narador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/Alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "August 16,2024 12:00:00",
    "Feliz Cumpleaños Cesar 🥸"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=-gi6LINyYso" target=":blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/-gi6LINyYso?si=_rD2Dvo2m_XViec2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/n5x8aYPtihmR1L6K6" target=":blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2spe!4v1692374267534!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeologation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
