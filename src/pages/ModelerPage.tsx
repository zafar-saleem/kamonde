import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

export const ModelerPage = () => {
  const viewer = new Modeler({});

  return (
    <>
      <h1>Modeler</h1>
      <div>{viewer.toString()}</div>
    </>
  )
}