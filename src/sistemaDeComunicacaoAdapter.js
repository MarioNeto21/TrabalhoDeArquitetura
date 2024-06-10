// SsitemaComunicacaoAdapter.js
// Onde eu estou importando o cozinhiero e trazendo a classe cozinheiro para uma comunicação.

import Cozinheiro from "./cozinheiro";
const cozinheiro = new Cozinheiro();

export default class SistemaComunicacaoAdapter {
  constructor(cozinheiro) {
    this.cozinheiro = cozinheiro;
  }

  enviarPedido(pedido) {
    this.cozinheiro.prepararPedido(pedido);
  }
}
