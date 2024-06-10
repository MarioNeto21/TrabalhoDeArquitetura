import Cliente from "./cliente";
import Cozinheiro from "./cozinheiro";
import SistemaComunicacaoAdapter from "./sistemaComunicacaoAdapter";

export default class ModeloFacade {
  constructor() {
    this.cliente = new Cliente();
    this.cozinheiro = new Cozinheiro();
    this.sistemaComunicacaoAdapter = new SistemaComunicacaoAdapter(
      this.cozinheiro
    );
  }

  fazerPedido() {
    this.cliente.fazerPedido();
    const pedido = {}; // Aqui você vai conseguir dar mais detalhes do pedido
    this.sistemaComunicacaoAdapter.enviarPedido(pedido); // O pedido enviado para a cozinha
    console.log("Pedido Concluído com Sucesso"); // Mensagem de Confirmação
  }
}
