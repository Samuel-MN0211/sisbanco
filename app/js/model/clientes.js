class Clientes {
    constructor() {
        this.clientes = [];
        this.clientes = [];
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        this.clientes.map(clienteAtual => {
            if (clienteAtual.cpf === cpf) {
                this.clientes.splice(this.clientes.indexOf(clienteAtual), 1);
            }
        });
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }
}
