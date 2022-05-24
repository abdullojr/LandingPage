import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Uslug from '../Uslugi/Uslug'
import History from '../History/History'
import Help from '../Help/Help'
import Whyus from '../Firstpagecomps/Whyus/Whyus'
import Application from '../Firstpagecomps/Application/Application'
import Maped from '../Firstpagecomps/Map/Maped'
import Footer from '../Footer/Footer'


const Layout = () => {
    return (
        <div>
            <Header />
            <Main />
            <Uslug />
            <History />
            <Help />
            <Whyus />
            <Application />
            <Maped />
            <Footer />
        </div>
    )
}

export default Layout