class clienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.clienteDependentes = [];
    }
    inserir(cliente) {
        this.clienteDependentes.push(cliente);
    }
    remover(cpf) {
        this.clienteDependentes.map(clienteAtual => {
            if (clienteAtual.cpf === cpf) {
                this.clienteDependentes.splice(this.clienteDependentes.indexOf(clienteAtual), 1);
            }
        });
    }
    listar() {
        return this.clienteDependentes;
    }
    pesquisar(cpf) {
        this.clienteDependentes.map(clienteAtual => {
            if (clienteAtual.cpf === cpf)
                return clienteAtual;
        });
        return null;
    }
}
