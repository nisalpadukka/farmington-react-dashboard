import React from "react";
import {Button, Card, Form} from "react-bootstrap";

//This contains to-do list widget
export default function Checklistwidget({ financeData}) {
    //value of the entry
    const [value, setValue] = React.useState("");
    //list of todos
    const [todos, setTodos] = React.useState([
        {
            text: "Sample Entry",
            isDone: false
        }
    ]);
    function Todo({ todo, index, markTodo, removeTodo }) {
        return (
            <div className="todo">
                <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
                <div>
                    <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                    <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
                </div>
            </div>
        );
    }

    function TodoForm({ addItem }) {

        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            addItem(value);
            setValue("");
        };

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                </Form.Group>
                <Button variant="primary mb-3" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }



    const addItem = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  return (
    <>
        <div className="container">
            <TodoForm addItem={addItem} />
            <div>
                {todos.map((todo, index) => (
                    <Card>
                        <Card.Body>
                            <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                markTodo={markTodo}
                                removeTodo={removeTodo}
                            />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </>
  );
}