const app = require("./src/app");
require("dotenv").config();

PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
