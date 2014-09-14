var regions = [{ID:0, Name: "Northland"},
               {ID:1, Name: "Auckland"},
               {ID:2, Name: "Waikato"},
               {ID:3, Name: "BayOfPlenty"},
               {ID:4, Name: "Gisborne"},
               {ID:5, Name: "HawkesBay"},
               {ID:6, Name: "Taranaki"},
               {ID:7, Name: "ManawatuWanganui"},
               {ID:8, Name: "Wellington"},
               {ID:9, Name: "Tasman"},
               {ID:10, Name: "Nelson"},
               {ID:11, Name: "Marlborough"},
               {ID:12, Name: "WestCoast"},
               {ID:13, Name: "Canterbury"},
               {ID:14, Name: "Otago"},
               {ID:15, Name: "Southland" }
              ]

//a method for obtaining statistical number which compares access vs no access in a region
function getNoAccessData(regionID, year) {
    var reg = regions[regionID].Name;
    
    //find out which structure we're iterating over
    var struc;
    if(year=="2001" || year=="01"){
        struc=commInfo2001;
    }
    else if (year=="2006" || year=="06"){
        struc=commInfo2006;
    }
    else if (year=="2013" || year=="13"){
        struc=commInfo2013;
    }
    
    for(var i=0; i<struc.length; i++){ //for loop to locate the appropriate object from array
        if( reg == struc[i].Region){
            
            var numerator = struc[i].NoAccess;
            var total = getAccessTotal(struc[i] );
            var percentage = numerator/total;
            return percentage; 
        }
    }
}



//A method that adds up all the people in a region who DO have access. Excludes 'no access'
function getAccessTotal(structure){
    var t = structure.Mobile + structure.Telephone + structure.Fax + structure.Internet;
    return t;
}


//Returns an object which contains the information relevant to a region, and a year.
function getICTData(regionID, year) {
    var reg = regions[regionID].Name;
    
    //find out which structure we're iterating over
    var struc;
    if(year=="2001" || year=="01"){
        struc=commInfo2001;
    }
    else if (year=="2006" || year=="06"){
        struc=commInfo2006;
    }
    else if (year=="2013" || year=="13"){
        struc=commInfo2013;
    }
    
    for(var i=0; i<struc.length; i++){ //for loop to locate the appropriate object from array
        if( reg == struc[i].Region){
            
            return struc[i];
        }
    }
}


function getRegionTotal(regionObject){
    var total = regionObject.NoAccess + regionObject.Mobile + regionObject.Telephone + regionObject.Fax + regionObject.Internet;
    return total;
}








