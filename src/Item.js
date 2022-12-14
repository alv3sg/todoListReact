class Item {
    static lastId = 0; //static identifica uma variavel global que pde ser vista por outras itens

    constructor(text){
        this.id = Item.lastId++
        this.text = text;
        this.done = false;
    }
}
export default Item