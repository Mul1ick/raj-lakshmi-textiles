import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Catalog from './Catalog'
import Clients from './Clients'

const SECTION_FOR_PATH = {
  '/': 'home',
  '/about': 'about',
  '/catalog': 'catalog',
  '/clients': 'clients',
}

export default function MobilePage() {
  const { pathname } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    const id = SECTION_FOR_PATH[pathname]
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    if (firstRender.current) {
      // Avoid an initial smooth scroll jump on first paint for "/"
      window.scrollTo({ top: pathname === '/' ? 0 : top, behavior: 'instant' })
      firstRender.current = false
    } else {
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [pathname])

  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="catalog"><Catalog /></section>
      <section id="clients"><Clients /></section>
    </>
  )
}
