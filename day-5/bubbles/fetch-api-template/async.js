// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked


// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest() {
  let promise = fetch("https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY_GOES_HERE&q=Ryan+Gosling&limit=25&offset=0&rating=G&lang=en");
  console.log(promise);
};

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {

};

// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for Ryan Gosling)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
