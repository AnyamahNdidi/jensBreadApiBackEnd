require("./utils/db")
const express = require("express")
const app = express()
const port = 4040
const http = require("http")
const server = http.createServer(app)
const cors = require("cors");


const { Server } = require("socket.io")

const io = new Server(server,  {
    cors: {
        origin: "*",
        methods :["GET", "POST"]
        
    },

    pingTimeout:5000
})

app.use(cors());
app.use(express.json())
app.use("/api", require("./Router/breadRouter"))
app.use("/api/user", require("./Router/userRouter"))
app.use("/api/all", require("./Router/detailController"))



io.on("connection", (socket) =>
{
    console.log("client has been connected")
})


server.listen(port, () =>
{
    console.log(`server is running on port ${port} `)
})
