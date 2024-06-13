import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./application/routes"

function App() {

  return (
    <BrowserRouter>
      <div className="w-screen min-h-dvh">
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
