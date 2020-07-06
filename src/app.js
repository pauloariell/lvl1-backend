const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

const projects = [];

app.get("/projects", (request, response) => {
  // TODO
  const { title } = request.query;

  const results = title
    ? projects.filter( project => projects.title.includes(title))
    : projects;


  response.json(results);
});

app.post("/projects", (request, response) => {
  // TODO
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner }

  projects.push(project);
  response.json(project);
});
module.exports = app;