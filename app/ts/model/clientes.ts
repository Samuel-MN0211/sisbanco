class Clientes {
    private clientes: Cliente[] = [];

    constructor() {
        this.clientes = [];
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        this.clientes.map( clienteAtual =>{
            if(clienteAtual.cpf === cpf){
                this.clientes.splice(this.clientes.indexOf(clienteAtual), 1);
    }})}

    listar(): Cliente[] {
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente | undefined {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }
}
