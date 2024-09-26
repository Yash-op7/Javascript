const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Clean the house" }
];

// Get all todos
app.get('/todos', (req, res) => {
//   res.json(todos);
res.send(JSON.stringify(todos))
});

// Get a single todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Create a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.status(204).end();
});

const port = 3000;
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}/`);
});
