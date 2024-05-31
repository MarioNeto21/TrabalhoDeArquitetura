const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/Smart_menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function adicionarProdutos() {
  try {
    await Product.create([
      { name: "hotdog", price: 5.99, quantity: 100 },
      { name: "xburguer", price: 7.49, quantity: 80 },
      { name: "pastel", price: 4.99, quantity: 120 },
      { name: "cocacola", price: 2.99, quantity: 200 },
      { name: "agua", price: 1.99, quantity: 150 },
      { name: "suco", price: 3.49, quantity: 100 },
    ]);
    console.log('Produtos adicionados com sucesso.');
  } catch (error) {
    console.error('Erro ao adicionar produtos:', error);
  } finally {
    
    mongoose.disconnect();
  }
}

adicionarProdutos();
