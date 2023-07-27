const express = require('express');
const app = express();
const port = 3000; // Możesz użyć dowolnego portu, na którym aplikacja ma działać.

// Definiowanie ścieżki głównej "/" i obsługi żądania GET.
app.get('/', (req, res) => {
  res.send('Hello, Node.js App!');
});
app.get('/about', (req, res) => {
    res.send('Hello, About');
  });
// Uruchamianie serwera na określonym porcie.
app.listen(port, () => {
  console.log(`Serwer uruchomiony na http://localhost:${port}`);
});