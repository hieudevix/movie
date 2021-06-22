import React, { Fragment } from 'react'
import Article from '../../components/Article/Article'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Introduce'
import ListCinemas from '../../components/ListCinemas/ListCinemas'
import Tab from '../../components/Tabs/Tab'

export default function Home() {
    return (
        <Fragment>
             <Header />
            <Carousel/>
            <Tab/>
            <ListCinemas />
            <Article />
            <Introduce />
            <Footer />
        </Fragment>
    )
}
