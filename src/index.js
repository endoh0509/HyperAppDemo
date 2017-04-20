/**
 * Created by katsuya on 2017/04/20.
 */

import { h, app } from "hyperapp"
import Button from "./components/Button"
// impoer "./scss/style.scss";


function updateObject(obj, set) {
  for(let k in set) {
    obj[k] = set[k];
  }
}

const model = {
  color: "",
  buttonState: false
};

const actions = {
  change: (model, { color }) => ({ color }),
  click: model => {
    updateObject(model, {buttonState: !model.buttonState});
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
  </div>
);

app({
  state: model,
  actions: actions,
  view: view
});
