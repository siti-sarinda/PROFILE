import { Component } from '../Component/componen.js';
import { Navbar } from '../Component/navbar.js';
import { Footer } from '../Component/footer.js';

export class KontakPages extends Component{
    render() {
        const navbar = new Navbar({ namaSekolah: "SMK YADIKA SOREANG - KONTAK" }).render();
        const footer = new Footer().render();
        return `${navbar}
        <main>
        <h2>Kontak SMK YADIKA SOREANG</h2>
        <p>ini teh halaman kontak tina website smk yadika soreang</p>
        </main>
        ${footer}
        `;
    }
};