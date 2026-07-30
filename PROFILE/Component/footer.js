import { Component } from './componen.js';
export class Footer extends Component {
    render() {
        const tahun = new Date().getFullYear();
        return `<hr/>
        <footer>
            <small> &copy; ${tahun} Smk Yadika Soreang </small>
        </footer>
        `
    }
}