//Essa é aclasse "main", para puxar os pedidos, clientes e o cozinheiro
import Cliente from "./cliente.js";
import Cozinheiro from "./cozinheiro.js";
import SistemaComunicacaoAdapter from "./SistemaComunicacaoAdapter.js";

// Criação das instâncias das classes
const cliente = new Cliente();
console.log("Cliente criado:", cliente);
const cozinheiro = new Cozinheiro();
console.log("Cozinheiro criado:", cozinheiro);
const sistemaComunicacaoAdapter = new SistemaComunicacaoAdapter(cozinheiro);
console.log("Adapter criado:", sistemaComunicacaoAdapter);

export default class ModeloFacade {
  constructor() {
    this.cliente = new Cliente();
    this.cozinheiro = new Cozinheiro();
    this.sistemaComunicacaoAdapter = new SistemaComunicacaoAdapter(
      this.cozinheiro
    );
  }

  fazerPedido() {
    //Método para realizar o pedido
    this.cliente.fazerPedido();
    const pedido = {}; //Aqui você vai conseguir dar mais detalhes do pedido
    // Esse aqui é o pedido que é enviado pra cozinha
    this.sistemaComunicacaoAdapter.enviarPedido(pedido);
    console.log("Pedido Concluído com Sucesso"); //Mensagem de Confirmação
  }
}

//Aqui o cliente vai fazer um pedido
cliente.fazerPedido();
console.log("Pedido confirmado");
// Pedido é enviado para o cozinheiro através do adapter
sistemaComunicacaoAdapter.enviarPedido(pedido);
