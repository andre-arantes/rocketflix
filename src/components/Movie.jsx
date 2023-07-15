import propTypes from 'prop-types'
function Movie({ data }) {
const {
  title,
  overview,
  poster_path,
  release_date
} = data
  const api_img = "https://image.tmdb.org/t/p/w500";
  return (
    <div className='flex flex-col items-center gap-6 my-12 md:flex-row'>
    <img src={api_img+poster_path} alt="" width="170px" />
    <div className="text-white">
      <h2 className='font-bold text-xl mb-4 text-center md:text-left'>{title}</h2>
      <p>Data de lançamento: {release_date}</p>
      <p className='text-center md:text-left'>{overview}</p>
      </div>
    </div>
  )
}

export default Movie;

Movie.propTypes = {
  data: propTypes.object,
}.isRequired;