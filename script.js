class Movie {
    title;
    studio;
    rating;
  
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  class Person {
    name;
    age;
    gender;
  
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  class UberPrice {
    baseFare;
    distance;
    duration;
    surge;
  
    constructor(baseFare, distance, duration, surge) {
      this.baseFare = baseFare;
      this.distance = distance;
      this.duration = duration;
      this.surge = surge;
    }
  
    calculatePrice() {
      const distanceFare = this.distance * 0.4;
      const durationFare = this.duration * 0.2;
      const totalFare = (this.baseFare + distanceFare + durationFare) * this.surge;
      return totalFare;
    }
  }
  
  // Usage examples
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  const movies = [new Movie("The Lion King", "Disney", "G"), new Movie("The Dark Knight", "Warner Bros", "PG-13"), casinoRoyale];
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  
  const johnDoe = new Person("John Doe", 30, "Male");
  
  const uberRide = new UberPrice(10, 5, 10, 1.5);
  const totalFare = uberRide.calculatePrice();
  console.log(totalFare);
  