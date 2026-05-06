import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'

const MOBILE_STACKED_PATHS = new Set(['/', '/about', '/catalog', '/clients'])

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  useEffect(() => {
    // On mobile, the stacked single-page handles section scrolling itself.
    if (isMobile && MOBILE_STACKED_PATHS.has(pathname)) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, isMobile])

  return null
}