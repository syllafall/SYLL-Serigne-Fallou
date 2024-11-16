export default [
  {
    ignores: [
      "vitest.config.js", // Exclure le fichier de configuration de Vitest
      "tests/**/*.test.js" // Exclure les fichiers de test
    ]
  },
  {
    files: ["**/*.js"], // Appliquer la configuration à tous les fichiers JS
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module" // Assurez-vous que ESLint gère les modules ESM
    },
    rules: {
      // Ajoutez ici vos règles de linting si nécessaire
    }
  }
];
