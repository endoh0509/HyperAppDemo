/**
 * Created by katsuya on 2017/04/20.
 */

import { h } from "hyperapp"

const Button = (props, child) => (
  <div>
    <button style={props.style} onClick={props.onClick()}>
      {child}
    </button>
  </div>
);

export default Button;