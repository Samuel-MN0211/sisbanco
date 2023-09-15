class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta:string;

    constructor(nome: string, cpf: string, conta: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }
    get conta(): string {
        return this._conta;
    }

    set conta(nome: string) {
        this._conta = nome;
}
}
