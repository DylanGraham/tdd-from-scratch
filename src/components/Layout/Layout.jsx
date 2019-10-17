import * as React from "react"
import logo from "./logo.png"

const Layout = ({ children }) => {
  return (
    <main className="text-center">
      <a
        href="https://www.developerhandbook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="DeveloperHandbook.com" />
      </a>
      {children}
    </main>
  )
}

export { Layout }
