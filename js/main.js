//1 в переменную ответ пользователя сколько фильмов просмотренно

let numberOfFilm = prompt("Сколько фильмов вы посмотрели", "Введите ответ здесь");
console.log(numberOfFilm);


// 2 создать объект и поместить ответ 1 вопроса, а так же пустые объекты



//3 поместить  в объек movies два ответа: фильм и рейтинг;
let a = prompt('Фильм');
let b = prompt('Рейтинг');
let c = prompt('Фильм');
let d = prompt('Рейтинг');

let personalMovieDb = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log (personalMovieDb);






// 3 задать 2 раза вопросы: посмотренный фильм и его рейтинг, ответы в 
//в movies так: movies: { 'logan' : '8.1'}

