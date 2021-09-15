const path = require("path")
const express = require("express")
// const router = express.Router()
const cors = require("cors")
const sqLite = require("better-sqlite3")

// create a new web server
const app = express()

// Request Body
app.use(express.json())

// CORS POLICY
app.use(cors())
// app.use(methodOverride("_method"))
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

// ask the web server to serve files from the frontend files
app.use(express.static(path.join(__dirname, "../build")))

// create a connection to the database
const db = new sqLite("../db/users.sqlite3")

// make some REST routes
app.get("/api/online", (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
    SELECT *
    FROM online 
    `)
    // run the query and return all the data
    let result = stmt.all()
    // send the result to the client as json
    res.json(result)
})
app.post("/api/online", (req, res) => {
    let errors = []
    if (!req.body.userIsLoggedIn) {
        errors.push("Userstate is not set!")
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    let stmt = db.prepare(`
    INSERT INTO online (loggedIn, user)
    VALUES (:userIsLoggedIn, :loggedInState)
    `)
    res.json(stmt.run(req.body))
})

app.get("/api/product", (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
    SELECT *
    FROM product 
    `)
    // run the query and return all the data
    let result = stmt.all()
    // send the result to the client as json
    res.json(result)
})

app.get("/api/product/:id", (req, res) => {
    let stmt = db.prepare(`
        SELECT *
        FROM product
        WHERE id = :id
    `)
    // run the query and return all the data
    let result = stmt.all({id: req.params.id})
    // send the result to the client as json
    res.json(result)
})

app.get("/api/cart", (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
    SELECT *
    FROM cart 
    `)
    // run the query and return all the data
    let result = stmt.all()
    // send the result to the client as json
    res.json(result)
})

app.get("/api/cart/:id", (req, res) => {
    let stmt = db.prepare(`
        SELECT *
        FROM cart
        WHERE id = :id
    `)
    // run the query and return all the data
    let result = stmt.all({id: req.params.id})
    // send the result to the client as json
    res.json(result)
})

app.get("/api/users", (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
        SELECT *
        FROM users 
    `)
    // run the query and return all the data
    let result = stmt.all()
    // send the result to the client as json
    res.json(result)
})

app.get("/api/users/:id", (req, res) => {
    let stmt = db.prepare(`
        SELECT *
        FROM users
        WHERE id = :id
    `)
    // run the query and return all the data
    let result = stmt.all({id: req.params.id})
    // send the result to the client as json
    res.json(result)
})

app.post("/api/register", (req, res) => {
    let errors = []
    if (!req.body.username) {
        errors.push("No username is set!")
    }
    if (!req.body.email) {
        errors.push("No email is set!")
    }
    if (!req.body.password) {
        errors.push("No password is set!")
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }

    let stmt = db.prepare(`
        INSERT INTO users (username, email, password) 
        VALUES (:username,:email,:password)`
    )
    
    res.json(stmt.run(req.body))
})

// ROUTING
app.get("/*", (req,res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"))
})

// start the web server
app.listen(4000, () => console.log("Listening on port 4000"))