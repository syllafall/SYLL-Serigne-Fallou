// server.js
const express = require("express");
const dotenv = require("dotenv");
const auth = require("./modules/authentication");

// Charger les variables d'environnement
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour la journalisation
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route principale
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route d'authentification
app.get("/auth/:secret", (req, res) => {
  const { secret } = req.params;

  try {
    const response = auth(secret);

    res.status(response.status).send(response.message);
  } catch (error) {
    console.error(`Erreur d'authentification: ${error.message}`);
    res.status(500).send("Une erreur est survenue.");
  }
});

// Gestion des routes inexistantes
app.use((req, res) => {
  res.status(404).send("Route non trouvée.");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
