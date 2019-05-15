// from data.js
var tableData = data;

//  d3 selectors
var button = d3.select("#filter-btn");
var dateText = d3.select("#datetime");
var cityText =d3.select("#cityname");
var stateText =d3.select("#statename");

var tbody = d3.select("tbody");

// add data to html table
function updateTable(dataset) {
    dataset.forEach(function(sight) {
        // console.log(sighting);
        var row = tbody.append('tr');
        Object.entries(sight).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


// filter data by date
function dateFilter(dataset) {
    var newText = dateText.property("value");
    var filteredDateData = dataset.filter(sighting => sighting.datetime === newText); 
    return filteredDateData;
    // console.log('date filtered');
}

function cityFilter(dataset) {
    var new1Text = cityText.property("value");
    var filteredCityData = dataset.filter(sighting => sighting.city === new1Text); 
    console.log('city filtered');
    return filteredCityData;
}



updateTable(tableData);

// display new table on click

button.on("click", function() {
    d3.event.preventDefault();
    
    tbody.html('');
    var dateData = dateFilter(tableData);
    
    updateTable(dateData);
 
    console.log('updated date')
    
});

// button.on("click", function() {
//     d3.event.preventDefault();
    
//     tbody.html('');
//     var cityData = cityFilter(tableData);
  
//     updateTable(cityData);
//     console.log('updated city')
    
// });
