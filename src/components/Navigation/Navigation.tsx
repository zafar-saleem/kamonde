import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/frameworks">Frameworks</Link>
      </li>
      <li>
        <Link to="/modeler">Modeler</Link>
      </li>
    </nav>
  )
}
