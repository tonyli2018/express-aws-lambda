const app = require('./src/app.js');
const port = process.env.PORT || 3001;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});

