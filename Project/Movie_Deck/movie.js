// 
const base_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US';
async function handleSearch (event) {
  event.preventDefault()
  // here we need to get data first from the input value and on the basis of that call the api right/
  const movieValue = document.getElementById('movieName')?.value;
 // Calling the api

}


async function getAllMovies(page=1) {
  try {
    const data = await fetch(`${base_url}&page=${page}`)
    const moviesList =  await data.json();
    console.log(moviesList)
 } catch(err){

 }
}

getAllMovies()