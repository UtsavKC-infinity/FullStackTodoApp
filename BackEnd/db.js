/*
Todo{
    title:string,
    description:string,
    completed:boolean
}
*/
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://utsavkc:1997%40ugust@cluster0.bvqpmzn.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
