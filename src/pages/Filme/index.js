import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'

import './filme.css'


function Filme(){

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, sertLoading] = useState(true)

    useEffect( () => {
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: 'f4e9a33159d71f1ff555b88514e21891',
                    language: 'pt-br',
                }
            })
            .then( response => {
                setFilme(response.data)
                sertLoading(false)
            })
            .catch( () => {
                navigate('/', { replace: true })
                return
            })
        }        
        loadFilme()

        return() => {

        }
    } ,[id, navigate])


    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix')
        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some( filmes => filmes.id === filme.id )

        if(hasFilme){
            toast.error('Este filme já foi salvo',{
            position: "top-center",})
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!!', {
            position: "top-center",
        })
    }


    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando...</h2>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button><a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel='external'>Trailer</a></button>
            </div>

        </div>
    )
}

export default Filme;