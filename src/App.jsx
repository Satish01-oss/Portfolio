import { BrowserRouter, Routes, Route } from "react-router-dom"
import MobileGuard from "./NotFound/MobileGuard"
import Home from "./Home"
import MobileNotFound from "./NotFound/MobileNotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Desktop site (guarded) */}
        <Route
          path="/"
          element={
            <MobileGuard>
              <Home />
            </MobileGuard>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<MobileNotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
