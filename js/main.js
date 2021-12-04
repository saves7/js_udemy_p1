//1 в переменную ответ пользователя сколько фильмов просмотренно

let numberOfFilm = prompt("Сколько фильмов вы посмотрели", "Введите ответ здесь");
console.log(numberOfFilm);


// 2 создать объект и поместить ответ 1 вопроса, а так же пустые объекты
let personalMovieDb = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

// 3 задать 2 раза вопросы: посмотренный фильм и его рейтинг, ответы в 
//в movies так: movies: { 'logan' : '8.1'}

let movQwest = function(mov, rang){};