const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Nike",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "Necesitamos un Logo! " });
  }
  res.send({
    tshirt: `Nike con tu logo ${logo} y ID ${id}`,
  });
});
