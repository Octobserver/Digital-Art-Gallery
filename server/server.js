import * as db from "./data/db.js";
import app from "./index.js";


db.connect();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
