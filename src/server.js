import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("you can do it Joy! Let's reach where you want to be!!");
}

const handleLogin = (req, res) => {
    return res.send("Login here!!!")
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅Server listening on port http://localhost:${PORT} 📡`);

app.listen(4000, handleListening);
