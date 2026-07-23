import { Component } from "../component/componen.js";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";

export class HomePages extends Component{
    render() {
        const navbar = new Navbar({ namaSekolah: "SMK YADIKA SOREANG - HOME "}).render();
        const footer = new Footer().render();
        return `${navbar}
        <main>
        <h2>Wilujeung Sumping di SMK YADIKA SOREANG</h2>
        <p>ini teh halaman awal tina website smk yadika soreang</p>
        </main>
        ${footer}
        `
    }
}