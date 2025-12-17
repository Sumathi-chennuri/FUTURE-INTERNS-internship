const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { email, message } = req.body;

  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ success: true, message: "Message received successfully" });
});

app.get("/", (req, res) => {
  res.send("Task 1 Backend Running");
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
