import { About } from "../components/home/About"
import { Features } from "../components/home/Features"
import { Greeting } from "../components/home/Greeting"
import { Layout } from '../components/layout';
import React from 'react'

export const Home = () => {
    return(
        <Layout>
            <Greeting/>
            <About />
            <Features />
        </Layout>
    )
}