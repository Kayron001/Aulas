export default class Cliente {
    #id: string
    #nome: string
    #idade: number

    // quando definimos o construtor do cadastro podemos já definir como serão o padrão de cada em caso se não haver cliente
    // constructor(nome: string = '', email: string = '', idade: number = 0, telefone: number = 0, id: string = null) {
    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static vazio() {
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}