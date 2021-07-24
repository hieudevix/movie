import React, { Fragment, useState } from 'react'
import Article from '../../components/Article/Article'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Introduce'
import ListCinemas from '../../components/ListCinemas/ListCinemas'
import Tab from '../../components/Tabs/Tab'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'

export default function Home() {
    const {isLoading} = useSelector(state=>state.ListMovieReducer);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    if(loading){
        return  <Fragment>
            <Header />
            <Loader/>
        </Fragment>
    }
    else{
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
    
}
