let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('101', 500);
const p1 = new Poupanca('202', 1000);
const cb1 = new ContaBonificada('303', 250);
console.log('Saldo da Conta: ' + c1.saldo);
cb1.creditar(50);
console.log('Saldo da Conta Bonificada: ' + cb1.saldo);
const cliente1 = new Cliente('Alice', '11122233344', "1500");
const cliente2 = new Cliente('Bob', '55566677788', "3000");

const clientes = new Clientes();
clientes.inserir(cliente1);
clientes.inserir(cliente2);

console.log('Lista de Clientes:');
console.log(clientes.listar());

console.log('Pesquisar Cliente pelo CPF:');
const clienteEncontrado = clientes.pesquisar('55566677788');
if (clienteEncontrado) {
  console.log('Cliente encontrado: ' + clienteEncontrado.toString());
} else {
  console.log('Cliente não encontrado.');
}
