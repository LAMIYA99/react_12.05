import React from 'react'
import Header from './Header'
import Footer from './Footer'
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