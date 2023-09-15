class clienteEspecial extends Cliente{
    private clienteDependentes: Array<Cliente>

    constructor(nome: string, cpf: string, conta:string) {
        super(nome, cpf, conta)
        this.clienteDependentes = [];
    }

    inserir(cliente: Cliente) {
        this.clienteDependentes.push(cliente)
    }

    remover(cpf:string){
        this.clienteDependentes.map( clienteAtual =>{
            if(clienteAtual.cpf === cpf){
                this.clienteDependentes.splice(this.clienteDependentes.indexOf(clienteAtual), 1);
            }
        })
    }

    listar() {
        return this.clienteDependentes
    }

    pesquisar(cpf:string):any{
        this.clienteDependentes.map( clienteAtual => {
            if(clienteAtual.cpf === cpf) 
                return clienteAtual
        })
        return null;
    }
}