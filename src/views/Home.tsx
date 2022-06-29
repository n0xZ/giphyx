import React from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../components/layout'

const Home = () => {
	return (
		<MainLayout>
			<h1>Bienvenido a Giphyx!</h1>
			<p>Explore, busque los distíntos GIFS pertenecientes a GIPHY!</p>
			<Link to="/search">Comenzar a buscar</Link>
		</MainLayout>
	)
}

export default Home
