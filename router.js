import { HomePages } from './Pages/home.js';
import { AboutPages } from './Pages/about.js';
import { KontakPages } from './Pages/kontak.js';
import { EskulPages } from './Pages/eskul.js';


export const routes ={
'/home': HomePages,
'/about': AboutPages,
'/kontak': KontakPages,
'/eskul': EskulPages,
};

export function router() {
    let path = window.location.hash.replace("#", "");

    if (path === "") {
        path = "/home";
    }

    const pageClass = routes[path] || HomePages;

    const page = new pageClass();
    document.getElementById("app").innerHTML = page.render();
}
