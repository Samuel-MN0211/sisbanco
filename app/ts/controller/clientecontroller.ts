class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputconta: HTMLInputElement;
    private clienteForm: HTMLFormElement;
    private listaClientes: HTMLElement;
  
    private clientes: Clientes;
  
    constructor() {
      this.inputNome = <HTMLInputElement>document.querySelector("#nome");
      this.inputCPF = <HTMLInputElement>document.querySelector("#cpf");
      this.inputconta = <HTMLInputElement>document.querySelector("#conta");
      this.clienteForm = <HTMLFormElement>document.querySelector("#cliente-form");
      this.listaClientes = <HTMLElement>document.querySelector("#lista-clientes");
      
  
      this.clientes = new Clientes();
  
      this.clienteForm.addEventListener("submit", (event) => {
        this.inserirCliente(event);
      });
  
      this.listarClientes();
    }
  
    inserirCliente(evento: Event) {
      evento.preventDefault();
  
      const nome = this.inputNome.value;
      const cpf = this.inputCPF.value;
      const conta = this.inputconta.value
  
      const novoCliente = new Cliente(nome, cpf, conta);
  
      this.clientes.inserir(novoCliente);
      this.inserirClienteNoHTML(novoCliente);
  
      this.inputNome.value = "";
      this.inputCPF.value = "";
      this.inputconta.value= "";
    }
  
    listarClientes() {
      const clientes = this.clientes.listar();
  
      clientes.forEach((cliente) => {
        this.inserirClienteNoHTML(cliente);
      });
    }
  
    inserirClienteNoHTML(cliente: Cliente) {
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
  
    removerCliente(cpf: string) {
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
  