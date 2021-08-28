import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    console.log("You are here!! finally!!!")
    return res.send("you can do it Joy! Let's reach where you want to be!!");
}

const handleLogin = (req, res) => {
    return res.send("Login here!!!")
}

const one = (req, res, next) => {
    console.log("middleware one")
    next()
}

const two = (req, res, next) => {
    console.log("middleware two")
    next()
}

const three = (req, res, next) => {
    console.log("middleware three")
    res.end()

}

app.get("/", one, two, three, handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅Server listening on port http://localhost:${PORT} 📡`);

app.listen(4000, handleListening);
