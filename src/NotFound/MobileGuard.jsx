import { useEffect, useState } from "react"
import MobileNotFound from "../NotFound/MobileNotFound"

const MobileGuard = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1000)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  if (isMobile) return <MobileNotFound />

  return children
}

export default MobileGuard
