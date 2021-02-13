import React, { useState, createContext } from "react"
import Header from "./shared/header"
import "./layout.css"
import styled from "@emotion/styled"
import Footer from "./shared/footer"

export const PagesStateContext = createContext({
  pages: "home",
  setPages: () => {}
})

const Wrapper = styled.div`
    @media only screen
  and (min-device-width: 1800px) {
    max-width: 1800px;
  }
`

const Layout = ({closeHeader, children }) => {
  const [pages, setPages] = useState('home')
  const value = { pages, setPages }

  // function togglePage(redirectTo) {
  //   console.log('toggle function redirect to: ', redirectTo)
  //   let page;
  //   for(page in this.pages) {
  //     if(page === redirectTo) {
  //       pages[page] = true
  //     } else {
  //       pages[page] = false
  //     }
  //   }
  //   setPages(pages)
  // }


  return (
    <PagesStateContext.Provider value={value}>
      <Wrapper>
        <Header closeHeader={closeHeader}/>
        <main pages={pages}>{children}</main>
        <Footer/>
      </Wrapper> 
    </PagesStateContext.Provider>
  )
}

export default Layout
