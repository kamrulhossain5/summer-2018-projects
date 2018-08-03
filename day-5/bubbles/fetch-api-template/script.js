// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var button = document.querySelector("#submit");
var wrapper = document.querySelector("#nav-wrapper");
var input = document.querySelector('#input');
var options = {}
button.addEventListener("click", e => {
  var inputValue = input.value;
  sendApiRequest(input.value);
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });



// --------------Defining functions ------------------
// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest(value) {
  fetch("https://api.edamam.com/search?app_id=e1b6a61a&app_key=5ad4e2c7ce4af157c9910ac8501172d1&q=" + value)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      addRecipeToScreen(json);
      // Pass the JSON on to the next function.
    })
    .catch(err => console.log(err))
}
// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addRecipeToScreen(json) {
  var allRecipes = json.hits

  allRecipes.forEach(hit => {
    var label = hit.recipe.label
    // wrapper.innerHTML += '<h1>' + label + '</h1>'

    var ingredients = hit.recipe.ingredientLines
    console.log(ingredients);
    // ingredients.forEach( ingredient => {
    var allIngredients = '<p style="font-size: 10px">' + ingredients + '</p>'
    // })

    var images = hit.recipe.image
    console.log(images);
    //images.forEach( image => {
    // wrapper.innerHTML += `<img src="${images}" width = "100px">`

    var finalHTML = `
      <div class = "images">
        <h2>${hit.recipe.label}</h2>
        <img src="${images}" width = "100px">
        ${allIngredients}
      </div>
    `
    wrapper.innerHTML += finalHTML

  })

}
