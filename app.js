import { HomePages } from './pages/home.js';

const home = new HomePages().render();

const app = document.getElementById("app");
app.innerHTML = home;