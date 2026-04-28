import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to the top-left corner of the window smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' prevents awkward scrolling animations during page loads
    })
  }, [pathname])

  return null // This component doesn't render anything visually
}