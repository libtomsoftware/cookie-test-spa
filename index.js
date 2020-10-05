const app = require("./app");
const port = process.env.PORT || 80;

app.listen(port, () => console.log(`SPA server is listening on port ${port}.`));
