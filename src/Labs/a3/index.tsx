import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import ReduxTodoList from "../a4/ReduxExamples/todos/TodoList";


export default function Assignment3() {
  return (
    <div>
     <h1>Assignment 3</h1>
      <ReduxTodoList/>
      <Styles/>
      <Classes/>
      <ConditionalOutput/>
      <PathParameters/>
      <JavaScript/>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <Add a={3} b={4}/>
      <TodoList/>
   </div>
  );
}