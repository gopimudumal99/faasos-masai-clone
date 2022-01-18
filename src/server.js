const app = require("./index");
const connect = require("./configs/db");

const port = process.env.PORT || 3000

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
