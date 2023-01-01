import React from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
import { ITodos } from "../Interfaces/interfaces";

interface Props {
  todos?: ITodos[];
  setField(name: string, value: any): void;
  saveToDo(e: any): void;
  RemoveToDo(e: any, index: number): void;
  todo?: ITodos;
}

function ToDos({ setField, saveToDo, todos, RemoveToDo, todo }: Props) {
  console.log("todos", todos);

  return (
    <div>
      <Container>
        <Form style={{ marginTop: "10px" }}>
          <Form.Group className="form-group row mb-3">
            <Form.Label className="col-3">Task</Form.Label>
            <div className="col-9">
              <Form.Control
                className="col-9"
                type="text"
                onChange={(e) => setField("item", e.target.value)}
                value={todo?.item}
                placeholder="Eat"
              />
            </div>
          </Form.Group>
          <Form.Group className="form-group row mb-3">
            <Form.Label className="col-3">Dates</Form.Label>
            <div className="col-9">
              <Form.Control
                className="col-9"
                type="number"
                onChange={(e) => setField("days", parseInt(e.target.value))}
                value={todo?.days}
                placeholder="0"
              />
            </div>
          </Form.Group>
          <div className="text-end">
            {/* btn cancle */}
            <Button
              // onClick={handleCancel}
              variant="danger"
            >
              Cancel
            </Button>

            {/* btn save */}
            <Button
              // disabled={isLoading}
              type="submit"
              style={{ margin: "5px" }}
              onClick={(e) => saveToDo(e)}
              variant="success"
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
      <Container>
        <h3>To-Do List</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Allocated Days</th>
              <th>Actiion</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo: ITodos, index: number) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{todo?.item}</td>
                  <td>{todo?.days}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={(e) => RemoveToDo(e, index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            {todos?.length === 0 && (
              <tr>
                <td colSpan={8} className='text-center'>
									No Data
								</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ToDos;
