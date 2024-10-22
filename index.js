const { connectDB } = require("./db");
const { PORT } = require("./config");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const schemadentro = require("./graphql/schema_dentro");
const { authenticate } = require("./middleware/auth");
const cors = require('cors')
const CONF=require('./config')

var root = {
    ip(parent, datos) {
        console.log(parent)
        console.log(datos)
        return datos.ip
    },
}

const app = express();
app.use((err, req, res, next) => {
    try {
        if (process.env.STATE != "PROD") {
            console.log(err)
        }
        return next()
    } catch (error) {
        console.error(error)
        return next()
    }
})
app.use(express.json({ limit: '7mb' }));
app.use(cors({
    origin: ['http://localhost:3000', '*'],
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Disposition'],
    credentials: true

}))

app.get("/", async (req, res, next) => {
    return `
  <!DOCTYPE html>
<html>
<head>
    <title>¡Bienvenido!</title>
</head>
<body>
    <h1>¡Hola! Bienvenido a mi api.</h1>
    <p>Api creada para el concurso de midu dev.</p>
</body>
</html>

  `
});

app.use(
    "/auth",
    graphqlHTTP({
        schema,
        graphiql: false,
        rootValue: root,
        context: req => (
            {
                ip: req
            }),
    })
);
app.use(
    "/graphql",
    authenticate,
    graphqlHTTP({
        schema: schemadentro,
        graphiql: true,
        rootValue: root,
        context: req => (
            {
                ip: req
            }),
    })
);

connectDB();
app.listen(PORT, () => {
    try {
        if (process.env.STATE != "PROD") {
            console.log(CONF.MONGODB_URI)
            console.log("ON")
        }
    } catch (error) {
        console.error(error)
    }
});


module.exports = app;
