import React from 'react'
// import '../styles/styles.css'
import Footer from '../components/Footer.js'

export default function Home() {
    return (
        <div className="home">
            <main className="main wrapper">
                <header>
                    <h1>tourbees</h1>
                    <div className="line"></div>
                    <h2>your exclusive tour partner</h2>
                    <a href="/tourmenu">
                        <button className="header-btn">find out</button>
                        </a>
                </header>
               
            </main>
           
            <Footer />
            
        </div>
    )
}
