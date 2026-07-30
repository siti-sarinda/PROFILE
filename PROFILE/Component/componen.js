export class Component{
    constructor(props = {}) {
        //props data yang dikirim dari luar ke komponen
        this.props = props;
    }
    render() {
        throw new Error('render() class belum di buat')
    }
}