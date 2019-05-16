// from data.js
var tableData = data;

//  d3 selectors
var button = d3.select("#filter-btn");
var dateText = d3.select("#datetime");
var cityText = d3.select("#cityname");
var stateText = d3.select("#statename");
var shapeText = d3.select("#shapename");

var tbody = d3.select("tbody");
// var shapeS = [];
var shapeWord = [];
var drop = [];
function readTable(dataset) {
    dataset.forEach(function(sights) {
        // var shapeD = shapeText.append("option");
        Object.entries(sights).forEach(function([key,value]) {
            var shapeS = sights.shape;
            
            shapeWord.push(shapeS);                      
        });       
    });
    var shapeUnique = [...new Set(shapeWord)];
    console.log(shapeUnique);
    shapeUnique.forEach(function(shap) {
        drop = shapeText.append("option");
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



//  trying multiple filters..
function filterFilter(dataset) {
    var newDateText = dateText.property("value");
    var newCityText = cityText.property("value");
    var newStateText = stateText.property("value");
    var newShapeText = shapeText.property("value");
    var filteredData = '';


    if (newDateText) {
        filteredData = dataset.filter(sighting => sighting.datetime === newDateText);
        console.log(filteredData);
        // return filteredData;
    }
    else {
        filteredData = dataset;
    }
    if (newCityText) {
        filteredData1 = filteredData.filter(sighting => sighting.city === newCityText);
        console.log(filteredData1);   
    }
    else {
        filteredData1 = filteredData;
    }
    if (newStateText) {
        filteredData2 = filteredData1.filter(sighting => sighting.state === newStateText);
        console.log(filteredData2);    
    }
    else {
        filteredData2 = filteredData1;
    }
    if (newShapeText) {
        filteredData3 = filteredData2.filter(sighting => sighting.shape === newShapeText);
        console.log(filteredData3);    
    }
    else {
        filteredData3 = filteredData2;
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
