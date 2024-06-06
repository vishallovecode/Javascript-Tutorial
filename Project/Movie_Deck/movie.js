// 

const base_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US';
const base_img_url = 'https://image.tmdb.org/t/p/original'
let movieList = []
let movieListContainer = document.getElementById('movieList');

 function handleSearch (event) {
  event.preventDefault()
  // here we need to get data first from the input value and on the basis of that call the api right/
  const input = document.getElementById('movieName');
  const movieValue = input.value
 // We need to filter
 const filterMovies = movieList.filter((movie)=>{
  return movie.title.toLowerCase().includes(movieValue.toLowerCase())
 })
 movieListContainer.innerHTML = ''
 renderMoviesCard(filterMovies)
}

function renderMoviesCard(lists ) {
  lists.forEach((movie , index) => {
   const container = createMovieCard(movie)
   movieListContainer.appendChild(container) /// movie
  //  movieListContainer.innerHTML += container; // innerHtml is security wise dangerous
 });
}
async function getAllMovies(page=1) {
  try {
    const data = await fetch(`${base_url}&page=${page}`)
     const jsonData =  await data.json();
     movieList = jsonData.results;
     renderMoviesCard(movieList)
 } catch(err){
  console.log(err)
 }
}

getAllMovies()


function createMovieCard(movie) {

  // // container
  const cardContainer =  document.createElement('div');
  cardContainer.className='movie-card'

  // header
  const header = document.createElement('div');
  header.style.width= '300px'
  header.style.height= '200px'
  const img = document.createElement('img')
  img.className ='card-img'
  img.src= `${base_img_url}${movie.poster_path}`
  header.append(img)
  
  cardContainer.appendChild(header)

  // body section
  const body = document.createElement('div');
  body.className ='card-body'

  // first row
  const row1 = document.createElement('div');
  row1.className ='title'
  row1.textContent=  movie.original_title
  body.appendChild(row1)

  // second row2
  const row2 = document.createElement('div');
  row2.className ='content'
  // content
  const content = document.createElement('div');
  content.className='footer'
 
  const span = document.createElement('span');
  span.textContent= `Votes: ${movie.vote_count}`
  const span2 = document.createElement('span');
  span2.textContent= `Rating: ${movie.vote_average}`

  content.appendChild(span)
  content.appendChild(span2)
  row2.appendChild(content)

  // heart section
  const heartcont = document.createElement('div');
  heartcont.addEventListener('click', ()=>{addFavourite(movie.id)})
  const image = document.createElement('img')
  let src = 'heart.png'
  if(movie.favourite) {
      src ='heartred.png'
  }
  image.style.height= '20px'
  image.style.width= '20px' 
   image.src = src
  heartcont.append(image)


  row2.appendChild(heartcont)
  body.appendChild(row2)
  cardContainer.append(body)

  return cardContainer;

//   return `<div class="movie-card">
//   <div style="width: 300px; height: 200px;">
//     <img class="card-img" src=${base_img_url}${movie.poster_path}/>
//   </div>
//   <div class="card-body">
//     <div class="title">${movie.title}</div>
//     <div class="content">
//       <div class="footer">
//         <span>Votes: ${movie.vote_count}</span>
//         <span>Rating: ${movie.vote_average}</span>
//         </div>
//         <div onclick="${()=>{addFavourite(movie.id)}}">
//         ${movie.favourite ? `<img src='heartred.png' style="height:20px;widht:20px; cursor:pointer">`: `<img src='heart.png' style="height:20px;widht:20px; cursor:pointer"></img>`}
//         </div>
//       </div>
//     </div>
// </div> `
}

function addFavourite(id) {
  movieListContainer.innerHTML = ''
 const updatedList = movieList.map((movie)=>{
  if(id===movie.id) {
    if(movie.favourite) {
      return  {
        ...movie,
        favourite:  false
      }
    } else {
      return  {
        ...movie,
        favourite:  true
      }
    }
  }
  return movie;
 })
 movieList = updatedList;

 renderMoviesCard(updatedList)
}


function getMovies(favourite) {
  movieListContainer.innerHTML = ''
  if(favourite) {
    const updatedList = movieList.filter((movie)=>{
        return movie.favourite;
     })
     renderMoviesCard(updatedList)
  } else {
    renderMoviesCard(movieList)
  }

}

