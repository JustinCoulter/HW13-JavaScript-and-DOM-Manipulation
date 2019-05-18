// from data.js
var tableData = data;

//  d3 selectors
var button = d3.select("#filter-btn");
var resetTable = d3.select("#reset-btn");
var resetFilter = d3.select("#filterReset-btn");
var dateText = d3.select("#datetime");
var cityText = d3.select("#cityname");
var stateText = d3.select("#statename");
var shapeText = d3.select("#shapename");

var tbody = d3.select("tbody");
// initialize variables for readTable function
var shapeWord = [];
var stateWord = [];
var cityWord = [];
var dateWord = [];

var drop = [];
// reads data and populates dropdown menus in html
function readTable(dataset) {
    dataset.forEach(function(sights) {
       
        Object.entries(sights).forEach(function([key,value]) {
            var shapeS = sights.shape;
            var stateS = sights.state;
            var cityS = sights.city;
            var dateS = sights.datetime;

            shapeWord.push(shapeS);
            stateWord.push(stateS);
            cityWord.push(cityS);  
            dateWord.push(dateS);                     
        });       
    });
    var shapeUnique = [...new Set(shapeWord)];
    shapeUnique.sort();
    var stateUnique = [...new Set(stateWord)];
    stateUnique.sort();
    var cityUnique = [...new Set(cityWord)];
    cityUnique.sort();
    var dateUnique = [...new Set(dateWord)];
    // console.log(shapeUnique);


    shapeUnique.forEach(function(shap) {
        drop = shapeText.append("option");
        drop.text(shap);       
    });
    stateUnique.forEach(function(shap) {
        drop = stateText.append("option");
        drop.text(shap);       
    });
    cityUnique.forEach(function(shap) {
        drop = cityText.append("option");
        drop.text(shap);       
    });
    dateUnique.forEach(function(shap) {
        drop = dateText.append("option");
        drop.text(shap);       
    });

}


// add data to html table
function updateTable(dataset) {
    dataset.forEach(function(sight) {
      
        var row = tbody.append('tr');
        Object.entries(sight).forEach(function([key,value]) {
        
            var cell = row.append("td");
            cell.text(value);
        });
    });
}



// filters
function filterFilter(dataset) {
    var newDateText = dateText.property("value");
    var newCityText = cityText.property("value");
    var newStateText = stateText.property("value");
    var newShapeText = shapeText.property("value");
    var filteredData = '';


    if (newDateText) {
        filteredData = dataset.filter(sighting => sighting.datetime === newDateText);
    }
    else {
        filteredData = dataset;
    }
    if (newCityText) {
        filteredData1 = filteredData.filter(sighting => sighting.city === newCityText);    
    }
    else {
        filteredData1 = filteredData;
    }
    if (newStateText) {
        filteredData2 = filteredData1.filter(sighting => sighting.state === newStateText);        
    }
    else {
        filteredData2 = filteredData1;
    }
    if (newShapeText) {
        filteredData3 = filteredData2.filter(sighting => sighting.shape === newShapeText);   
    }
    else {
        filteredData3 = filteredData2;
    }
    if (filteredData3 == '') {
        window.alert(" I'm sorry Christian. \n NO RELEVANT RECORD FOUND \n Please Reset Filters");
        
    }
    return filteredData3;
}  


updateTable(tableData);
readTable(tableData);

// display new table on click
button.on("click", function() {
    d3.event.preventDefault();
    
    tbody.html('');
    var fData = filterFilter(tableData);
    console.log(fData);
    updateTable(fData);
 
    console.log('updated date')
    
});

// reset Table button
resetTable.on("click", function() {
    d3.event.preventDefault();

    tbody.html('');

    updateTable(tableData);

    console.log('reset table')
    
});

// reset Filter button 
resetFilter.on("click", function() {
    d3.event.preventDefault();

    document.getElementById('datetime').value = '';
    document.getElementById('cityname').value = '';
    document.getElementById('statename').value = '';
    document.getElementById('shapename').value = '';

    console.log('reset filters')
    
});