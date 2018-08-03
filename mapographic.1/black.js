// //https://data.cityofnewyork.us/resource/rreq-n6zk.json
// var submitButton = document.querySelector('#submit')
// var raceSelect = document.querySelector('#race')
// var wrapper = document.querySelector('#wrapper')
var race = 'percent_black_non_hispanic'
var map = document.querySelector('#map')
var wantedData;
let zipCodes = [];
var race;
var boxes = [];
// var bounds = getLatLong()
function main(){
    preferredRace(race)
    zipCodes.forEach(zip =>{
        getLatLong()   
    })
}
//Gets the data we need for the race we select
function preferredRace(race) {
    fetch(`https://data.cityofnewyork.us/resource/rreq-n6zk.json`)
        .then(function(data) {
            return data.json();
        })
        .then(function(json) {
            // console.log(json)
            let wantedData = json.filter(zip => {
                let b = zip[race]
                let num = Number(b)
                return num > 0
            })
            // console.log(wantedData)
            let wantedRace = json.map(zip => {
                    return { zip: zip.jurisdiction_name, percentage: Number(zip[race]) }
                })
                .sort((zip1, zip2) => {
                    return zip2.percentage - zip1.percentage
                })
            console.log(wantedRace)

            wantedRace.forEach(jurisdiction => {
                if (jurisdiction.percentage >= 0.60) {

                    // return { zip: zip.jurisdiction_name, percentage: Number(zip[race])} 
                    zipCodes.push(jurisdiction.zip)
                };
            })
            if (race == 'percent_american_indian' || race == 'percent_pacific_islander') {
                wantedRace.forEach(jurisdiction => {
                    if (jurisdiction.percentage >= 0.01) {
                        zipCodes.push(jurisdiction.zip)
                    }
                })
            }
            if (race == 'percent_other_ethnicity' || race == 'percent_ethnicity_unknown') {
                wantedRace.forEach(jurisdiction => {
                    if (jurisdiction.percentage >= 0.1) {
                        zipCodes.push(jurisdiction.zip)
                    }
                })
            }
            // if (percent_pacific_islander > 0){
            //     return { zip: zip.jurisdiction_name, percentage: Number(zip[race]) };
            // }  
            // if (percent_american_indian > 0){
            //   return { zip: zip.jurisdiction_name, percentage: Number(zip[race]) };
            // }
            // console.log(zipCodes)
            return zipCodes;
        })
    // console.log('Here are the zip Codes' + zipCodes)
    // zipCodesAndData.forEach(jurisdiction => {
    //     getLatLong(jurisdiction)
    // })

}


function getLatLong(jurisdiction) {
    //var compareArray = compareArray.push(info => {
    // info[]
    //})
    // let zip = jurisdiction.zip || 10009
    let zip = jurisdiction || 10009
    
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyBa1dfvcXoEUxnHQa3F5fB_pkXIykQ07T4`)
        .then(function(data) {
            return data.json();
        })
        .then(function(json) {
            // console.log(json);
            let bounds = json.results.map(results => {
                return {north: json.results[0].geometry.bounds.northeast.lat, south: json.results[0].geometry.bounds.southwest.lat, east: json.results[0].geometry.bounds.northeast.lng, west: json.results[0].geometry.bounds.southwest.lng}
            })
            // const boundss = json.results[0].geometry.bounds
            displayBox(bounds, jurisdiction)
            // console.log(bounds)
            // return bounds
            
        })

    // var getZip = myJSON.results[0].geometry.location;
    // return location;
}

function displayBox(bounds, jurisdiction) {
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 40.727, lng: -73.980},
          mapTypeId: 'hybrid'
        });

    var rectangle = new google.maps.Rectangle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          bounds: bounds
        });
        return rectangle;
}

// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 11,
//           center: {lat: 40.727, lng: -73.980},
//           mapTypeId: 'hybrid'
//         });

//         
        
//         var rectangle_10004 = new google.maps.Rectangle({
//           strokeColor: '#FF0000',
//           strokeOpacity: 0.8,
//           strokeWeight: 2,
//           fillColor: '#FF0000',
//           fillOpacity: 0.35,
//           map: map,
//           bounds: {
//             north: 40.706,
//             south: 40.699,
//             east: -74.006,
//             west: -74.018
//           }
          
//         });
//       }