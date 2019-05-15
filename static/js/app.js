// from data.js
var tableData = data;
var dateText = d3.select("#datetime");
var cityText =d3.select("#cityname");
var stateText =d3.select("#statename");
// YOUR CODE HERE!
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

updateTable(tableData);

// filter by date

dateText.on("change", function() {
  
    tbody.html('');
    var newText = d3.event.target.value;
    
    var dateData = tableData.filter(sighting => sighting.datetime === newText);
    // return dateData;
    // console.log(dateData);
    console.log(newText);
    updateTable(dateData);
    d3.event.preventDefault();
});

//  filter by city
cityText.on("change", function() {
  
    tbody.html('');
    var newCity = d3.event.target.value;
    
    var cityData = tableData.filter(sighting => sighting.city === newCity);
  
    // console.log(dateData);
    console.log(newCity);
    updateTable(cityData);
});

// filter by state
stateText.on("change", function() {

    tbody.html('');
    var newState = d3.event.target.value;
    
    var stateData = tableData.filter(sighting => sighting.state === newState);
  
    // console.log(dateData);
    console.log(newState);
    updateTable(stateData);
});
