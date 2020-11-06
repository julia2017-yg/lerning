// use strict;


const personalMovieDB = {

  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const q1 = prompt('Один из последних просмотренных фильмов', ''),
        q2 = prompt('На сколько оцените его', '');

      if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
        personalMovieDB.movies[q1] = q2;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }

  },
  detectPersonalLevel: function() {

    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('ВЫ классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('ВЫ киноман');
    } else {
      console.log('Error');
    }

  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
    }else {
        personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр ${i}`);
       
      if (genre == '' || genre == null) {
        console.log('you entered incorrect data or did not enter them all');
        i--;
      }else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Any genre ${i + 1} - that ${item}`);
    });
  }  
};




 

