/**
 * Created by katsuya on 2017/04/20.
 */

import { h } from "hyperapp"

const List = (props, child) => (
  <ul>
    {props.data.map((d) => <li><input type="checkbox" class={props.listClass}/>{d}</li> )}
  </ul>
);

export default List;