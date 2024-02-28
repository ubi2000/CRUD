const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const noteController = require("./controllers/noteController");
const cors=require("cors")

const app = express();
app.use(express.json());
app.use(cors())

dbConnect();

//get all notes
app.get("/note", noteController.fetchNote);
// get single note
app.get("/note/:id", noteController.singleNote);
//create  new note
app.post("/note", noteController.createNote);
//update note
app.put("/note/:id", noteController.updateNote);
//delete a note
app.delete("/note/:id", noteController.deleteNote);

app.listen(process.env.PORT || 3000);
