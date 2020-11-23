import * as express from "express"
import { connect } from "./database/database"

const app = express()
const port = 5002
const db = connect()

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})


app.get('/',async (req,res) => {
  const ans = await db.UserModel.find()
  res.send(ans)
})