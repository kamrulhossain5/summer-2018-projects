# Learn the Google Maps API

Congratulations on making it this far! In this open ended lab you'll be learning to use the Google Maps API to place pins on a map. Before moving on, think about a list of places you'd like to map out. Some examples:

* A travel log: Places you've been and places you want to go.
* Your favorite restaurants
* Locations that are of personal significance to you in your life
* Locations where there is major world news occurring.

We're going to programmatically build this map out (and then have plenty of time for tinkering) using the Google Maps API (an API, or Application Programming Interface is a way for developers to connect to apps and bring their data into their own programs).

**Fork and clone this repo** to get the starter code. You'll notice that we have an `index.html` file where we'll be displaying our map, and a `script.js` file where we'll be writing our javascript that manipulates the map using the API. In `index.html` you'll see that the `<head>` contains a `<script>` tag linking to the google maps API.

```html
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=your-API-Key-here&callback=initMap">
</script>
```
You'll see that there is a section of the url that says `your-API-Key-here` - that's because we need to tell Google who we are and show them that we are not abusing their system.

## Get an API key

Head to the [Google Developer Console](https://developers.google.com/maps/documentation/javascript/get-api-key) to get an API key for Google Maps.

Once you've got it, add it in the the API URL in the script tag!

## Step 1: Set up a map with one marker

![one-pin map](https://s3.amazonaws.com/upperline/curriculum-assets/javascript/maps-pin.png)

Your first goal is to get a map with **ONE MARKER** on your screen. [Read this Google Walkthrough](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) and see how far you get.

To find the latitude and longitude of a place, check out [Latlong.net](http://www.latlong.net/)


## Step 2: Multiple Markers

![Many Pins on a Map](https://s3.amazonaws.com/upperline/curriculum-assets/javascript/multi-maps-pins.png)

Put your iteration skills to the test! Copy the code below into your code. You now have an array of locations (feel free to add more) in an array called `locations`. Iterate through the array using `forEach()` or a for loop to place each of the locations on the map as a pin.

```js
var caracas = {lat: 10.4806, lng: -66.9036};
var newYork = {lat: 40.7128, lng: -74.0059};
var paris = {lat: 48.856, lng: 2.352};
var losAngeles ={lat: 34.05, lng: -118.2437};
var locations = [caracas, newYork, paris, losAngeles]
```

## Step 3: Info Windows

Check out [this documentation on Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows). Place an info window on each location with information about the spot. For example, if you are mapping restaurants, place your review, an image, or any other pertinent information on the map.

#### Challenges

You can take this super far! A few challenges:
+ Change the look of the map
+ Allow the map to [use your geolocation](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation)
+ Add in [animations to your markers](https://developers.google.com/maps/documentation/javascript/examples/marker-animations)
+ Add a text input and a button to the top of the page. When a user adds in a location, get the coordinates ([using geocoding](https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple)), and then place a pin on the map for that location!
