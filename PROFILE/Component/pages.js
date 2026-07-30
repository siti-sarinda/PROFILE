import { Component } from './componen.js';
import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

export class Pages extends Component{
    render() {
        const navbar = new Navbar({namaSekolah: "SMK YADIKA SOREANG" }).render();
        const footer = new Footer().render();

        return `
        ${navbar}
        ${this.renderContent()}
        ${footer}`;
    }

    renderContent() {
        throw new Error("renderContent() harus diimplementasikan oleh subclass");
    }
}