import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto',{headers: {"Accept-Encoding":"gzip,deflate,compress"},})
  .then(function (response) {
    // handle success
    console.log("SUUUU")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("NAOOOOO")
    console.log(error);
  })

  //jquery interactuar con html