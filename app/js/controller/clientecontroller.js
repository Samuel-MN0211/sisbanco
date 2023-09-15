class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCPF = document.querySelector("#cpf");
        this.inputconta = document.querySelector("#conta");
        this.clienteForm = document.querySelector("#cliente-form");
        this.listaClientes = document.querySelector("#lista-clientes");
        this.clientes = new Clientes();
        this.clienteForm.addEventListener("submit", (event) => {
            this.inserirCliente(event);
        });
        this.listarClientes();
    }
    inserirCliente(evento) {
        evento.preventDefault();
        const nome = this.inputNome.value;
        const cpf = this.inputCPF.value;
        const conta = this.inputconta.value;
        const novoCliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
        this.inputNome.value = "";
        this.inputCPF.value = "";
        this.inputconta.value = "";
    }
    listarClientes() {
        const clientes = this.clientes.listar();
        clientes.forEach((cliente) => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement("p");
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "Remover";
        botaoApagar.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
        botaoApagar.addEventListener("click", () => {
            this.removerCliente(cliente.cpf);
        });
        elementoP.appendChild(botaoApagar);
        this.listaClientes.appendChild(elementoP);
    }
    removerCliente(cpf) {
        this.clientes.remover(cpf);
        this.atualizarListaClientes();
    }
    atualizarListaClientes() {
        this.listaClientes.innerHTML = "";
        this.listarClientes();
    }
}
window.addEventListener("load", () => {
    new ClienteController();
});
