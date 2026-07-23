import { Component } from './componen.js';
export class Navbar extends Component {
    render() {
        const {namaSekolah} = this.props;
    return `
   <nav>
    <h2>${namaSekolah}<h2>
    <a href="#/home">home</a>
    <a href="#/about">about</a>
    <a href="#/kontak">kontak</a>
    </nav>
    `
    }
}