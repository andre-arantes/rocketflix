import './index.css'
import fetchData from './services/api'
import Movie from './components/Movie';
import { useState } from 'react';
import initialData from './helpers/initialData'
import shuffle from "./assets/shuffle.svg"

function App() {
  const[data, setData] = useState(initialData)
  const handleSubmit = (event) => {
    event.preventDefault();
    const movie_id = (Math.random() * 1000) + 1
    fetchData(movie_id)
    .then((response) => {
      setData(response);
    })
    .catch(() => {
      console.log("erro")
    })
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen w-2/4  ">
      <img src={shuffle} alt="" width="90px" className="mb-4" />
      <h1 className='text-4xl font-bold text-white text-center'>Não sabe o que assistir?</h1>
      <Movie data ={data}/>
      <button
      type='submit'
      onClick={handleSubmit}
      className='text-sm'
      >
      <img src={shuffle} alt="" width="30px" />    
      Encontrar filme
      </button>
    <p className='text-white text-center mt-4 mb-12'>Clique em Encontrar Filme que traremos informações de algum filme para você assistir hoje.</p>
  </div>
  )

}

export default App
