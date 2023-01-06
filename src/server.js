require("dotenv/config");

const app = require("./app");
const port = process.env.APPLICATION_SERVER_PORT;

app.listen(port, () => {
    console.log(`Server running at port: ${port}.`)
});