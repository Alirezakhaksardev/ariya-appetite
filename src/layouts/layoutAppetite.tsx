"use client"
import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutAppetite = {
    children : ReactNode
}

function LayoutAppetite({children} : LayoutAppetite) {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default LayoutAppetite