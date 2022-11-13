import { Container } from "@mui/system"
import React from "react"
import Cards from './Cards'
import mainLogo from '../img/logo.png'
import loginLogo from '../img/group.png'
import favLogo from '../img/hfood.png'
import vegLogo from '../img/vfood.png'


const Home = () => (
    <>
        <main className="container">
            <section className="cards">
                <Cards text="Buscar Horta" img={vegLogo} cor="card-verde" />
                <Cards text="Login Agricultor" img={loginLogo} cor="card-cinza" />
                <Cards text="Sobre nós" img={mainLogo} cor="card-verde" />
                <Cards text="Hortas favoritas" img={favLogo} cor="card-cinza" />
            </section>
        </main>
    </>
)

export default Home

