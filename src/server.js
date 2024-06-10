import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Crie um esquema para os pedidos
const pedidosSchema = new mongoose.Schema({
  pedidos: [{ item: String, quantidade: Number }],
  data: { type: Date, default: Date.now() },
});

const Pedidos = mongoose.model("Pedidos", pedidosSchema);

// Substitua '<username>', '<password>' e '<dbname>' com suas informações do MongoDB Atlas
const mongoUri =
"mongodb+srv://mario:123@cluster0.rrirhrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Conecte ao MongoDB Atlas
mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB Atlas:", err));

const app = express();
app.use(bodyParser.json());

// Configurar o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota para o acesso à página HTML
app.get("/", async (_, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Rota para criar um novo pedido
app.post("/api/pedidos", async (req, res) => {
  const listaPedidos = req.body;

  try {
    const novoPedido = await Pedidos.create({ pedidos: listaPedidos });
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar o pedido.", error });
  }
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
