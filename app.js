import { HomePages } from './PROFILE/Pages/home.js';
import { AboutPages } from './PROFILE/Pages/about.js';
import { KontakPages } from './PROFILE/Pages/kontak.js';

const home = new HomePages().render();

const app = document.getElementById("app");
app.innerHTML = home;

export const routes = {
    '/home': HomePages,
    '/about': AboutPages,
    '/kontak': KontakPages,
};

function renderPages() {
    const hash = window.location.hash || '#/home';
    const route = hash.slice(1);
    const PageClass = routes[route];
    if (PageClass) {
        const page = new PageClass().render();
        app.innerHTML = page;
    }
}

addEventListener('hashchange', renderPages);
