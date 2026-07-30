import { Component } from '../Component/componen.js';
import { Navbar } from '../Component/navbar.js';
import { Footer } from '../Component/footer.js';

export class AboutPages extends Component{
    render() {
        const navbar = new Navbar({ namaSekolah: "SMK YADIKA SOREANG - ABOUT" }).render();
        const footer = new Footer().render();
        return `${navbar}
        <main>
        <h2>ABOUT SMK YADIKA SOREANG</h2>
        <p>ini teh halaman tentang tina website smk yadika soreang</p>
        </main>
        ${footer}
        `
    }
};