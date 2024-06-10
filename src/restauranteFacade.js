import Cliente from "./cliente";
import Cozinheiro from "./cozinheiro";
import SistemaComunicacaoAdapter from "./sistemaComunicacaoAdapter";

export default class RestauranteFacade {
  constructor() {
    this.cliente = new Cliente();
    this.cozinheiro = new Cozinheiro();
    this.sistemaComunicacaoAdapter = new SistemaComunicacaoAdapter(
      this.cozinheiro
    );
  }

  fazerPedido() {
    this.cliente.fazerPedido();
    const pedido = {};
    this.sistemaComunicacaoAdapter.enviarPedido(pedido);
    console.log("Pedido concluído com sucesso!");
  }
}
