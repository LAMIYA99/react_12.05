import React from 'react'
import Header from './header'
import Footer from './footer'
import HomePage from '../pages/HomePage'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout