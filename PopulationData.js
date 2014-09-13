var files = ["Pop info.csv", "Comm info.csv"];
var popFile = files[0];
var years = popFile.split(/\r\n|\n/);

var 2001info = [];
var 2006info = [];
var 2013info = [];

for(var year = 0; year < years.length(); year++){
 
    var dataPoints = year.split(',');
    year = dataPoints[0];
    
    for(var dataPoint = 1; dataPoint < popFile.length; dataPoint = dataPoint+2){
        if(year == 0){var 2001info.push(dataPoints[dataPoint]: [dataPoint+1]);}
        else if (year == 1){var 2006info.push(dataPoints[dataPoint]: [dataPoint+1]);}
        else if (year == 2){var 2013info.push(dataPoints[dataPoint]: [dataPoint+1]);}
    }
}
