/**
 * Created by katsuya on 2017/04/20.
 */

import { h, app } from "hyperapp"
import Button from "./components/Button"
import List from "./components/List"
// impoer "./scss/style.scss";


function updateObject(obj, set) {
  for(let k in set) {
    obj[k] = set[k];
  }
}

const model = {
  color: "",
  buttonState: false,
  todoList: []
};

const actions = {
  change: (model, { color }) => ({ color }),
  click: model => {
    updateObject(model, {buttonState: !model.buttonState});
    return model;
  },
  typeTodo: (model, e, action) => {
    // console.log("model:", model);
    // console.log("e:", e);
    // console.log("actionn:", action);
    if(e.keyCode === 13) {
      actions.addList(model);
    }
    return model;
  },
  addList: (model) => {
    let todoInput = document.getElementById("todoInput");
    model.todoList.push(todoInput.value);
    todoInput.value = "";
    return model;
  },
  removeList: (model) => {
    let todos = document.getElementsByClassName("todo");
    let rmKeys = [];
    for (let key in todos) {
      if(todos[key].checked) {
        rmKeys.push(key);
        todos[key].checked = false;
      }
    }
    for(let i = 0; i < rmKeys.length; i++){
      model.todoList.splice(rmKeys[i]-i, 1);    //exe[i]-i番目から1つだけ削除
    }
    return model;
  }
};

const view = (model, actions) => (
  <div id="app">
    <input
      style={{
        color: model.color,
        borderColor: model.color,
        outline: "none"
      }}
      placeholder="Type a color..."
      type="text"
      onInput={e => actions.change({ color: e.target.value })}
    />
    <Button
      style={{
        backgroundColor: model.buttonState ? "#FFF" : "#555"
      }}
      onClick={
        e => actions.click
      }>
      test
    </Button>
    <div>{ model.buttonState.toString() }</div>


    <hr/>

    <div>
      <input id="todoInput"
             type="text"
             placeholder="Type a TODO..."
             onKeyDown={e => actions.typeTodo(e)}
      />
      <button onClick={e => actions.addList()}>
        ADD
      </button>
    </div>

    <button onClick={e => actions.removeList()}>
      DONE
    </button>

    <List data={model.todoList} listClass="todo"/>
  </div>
);

app({
  state: model,
  actions: actions,
  view: view
});
