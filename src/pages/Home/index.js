import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import api from '../../services/api'

function Home(){

    const [filmes, sertFilmes] = useState([])
    const [loading, sertLoading] = useState(true)

    useEffect( () => {

        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: 'f4e9a33159d71f1ff555b88514e21891',
                    language: 'pt-br',
                    page: 1
                }
            })

            // console.log(response.data.results.slice(0,10))
            sertFilmes(response.data.results.slice(0,10))
            sertLoading(false)
        }
        
        loadFilmes()
    } ,[])


    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map( filme => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                } )}
            </div>
        </div>
    )
}

export default Home;