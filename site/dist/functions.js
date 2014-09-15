var regions = [{ID:7, Name: "Northland"},
               {ID:8, Name: "Auckland"},
               {ID:9, Name: "Waikato"},
               {ID:10, Name: "BayOfPlenty"},
               {ID:12, Name: "Gisbourne"},
               {ID:11, Name: "HawkesBay"},
               {ID:13, Name: "Taranaki"},
               {ID:14, Name: "ManawatuWanganui"},
               {ID:15, Name: "Wellington"},
               {ID:4, Name: "Tasman"},
               {ID:5, Name: "Nelson"},
               {ID:6, Name: "Marlborough"},
               {ID:1, Name: "WestCoast"},
               {ID:3, Name: "Canterbury"},
               {ID:2, Name: "Otago"},
               {ID:0, Name: "Southland" },
               {ID:16, Name: "Stewart Island" }
              ];


function getRegionName(regionID) {
    for( var i = 0; i < regions.length; i++) {
		if(regions[i].ID == regionID) {
            return regions[i].Name;
        }
    }
}

//a method for obtaining statistical number which compares access vs no access in a region
function getNoAccessData(regionID, year) {
    if(regionID >= regions.length) {
        return;
    }
    var reg = getRegionName(regionID);
    
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
            var total = getAccessTotal(struc[i]);
            var percentage = numerator/total;
            return percentage * 100; 
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
    var reg = getRegionName(regionID);
    
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
            return [{name: "No Access", value: struc[i].NoAccess}, {name: "Mobile", value: struc[i].Mobile}, {name: "Telephone", value: struc[i].Telephone}, {name: "Fax", value: struc[i].Fax}, {name: "Internet", value: struc[i].Internet}];
        }
    }
}


function getRegionTotal(regionObject){
    var total = regionObject.NoAccess + regionObject.Mobile + regionObject.Telephone + regionObject.Fax + regionObject.Internet;
    return total;
}

function getAgeData(regionID, year) {
    var ageData;
    if(year == "2006") {
        ageData = Ages2006;
    }
    else {
        ageData = Ages2013;
    }
}



var commInfo2001 = [{Region: "Northland", NoAccess:2940, Mobile:0, Telephone:43830, Fax:11394, Internet:13296},
                    {Region: "Auckland", NoAccess:12309, Mobile:0, Telephone:356073, Fax:108336, Internet:163869},
                   {Region: "Waikato", NoAccess:5637, Mobile:0, Telephone:116019, Fax:31341, Internet:40287},
                   {Region: "BayOfPlenty", NoAccess:4161, Mobile:0, Telephone:78585, Fax:20454, Internet:26613},
                    {Region: "Gisbourne", NoAccess:1239, Mobile:0, Telephone:13191, Fax:2715, Internet:3603},
                   {Region: "HawkesBay", NoAccess:2286, Mobile:0, Telephone:47754, Fax:11082, Internet:15573},
                   {Region: "Taranaki", NoAccess:1434, Mobile:0, Telephone:35838, Fax:8151, Internet:11775},
                   {Region: "ManawatuWanganui", NoAccess:3273, Mobile:0, Telephone:75036, Fax:16179, Internet:24822},
                    {Region: "Wellington", NoAccess:4068, Mobile:0, Telephone:146484, Fax:34926, Internet:66678},
                   {Region: "Tasman", NoAccess:597, Mobile:0, Telephone:14094, Fax:4257, Internet:4698},
                   {Region: "Nelson", NoAccess:411, Mobile:0, Telephone:15042, Fax:3558, Internet:5505},
                   {Region: "Marlborough", NoAccess:411, Mobile:0, Telephone:14094, Fax:3951, Internet:4680},
                   {Region: "WestCoast", NoAccess:771, Mobile:0, Telephone:10506, Fax:2448, Internet:2781},
                   {Region: "Canterbury", NoAccess:4326, Mobile:0, Telephone:175494, Fax:43683, Internet:65148},
                    {Region: "Otago", NoAccess:1731, Mobile:0, Telephone:65919, Fax:15084, Internet:2323},];
var commInfo2006 = [{Region: "Northland", NoAccess:1767, Mobile:36120, Telephone:44412, Fax:14061, Internet:26433},
                    {Region: "Auckland", NoAccess:7491, Mobile:314412, Telephone:380835, Fax:119040, Internet:269589},
                   {Region: "Waikato", NoAccess:3225, Mobile:98886, Telephone:116535, Fax:36318, Internet:74937},
                   {Region: "BayOfPlenty", NoAccess:2610, Mobile:66855, Telephone:80688, Fax:24684, Internet:51153},
                   {Region: "Gisbourne", NoAccess:645, Mobile:9528, Telephone:12708, Fax:3030, Internet:6873},
                   {Region: "HawkesBay", NoAccess:1422, Mobile:37200, Telephone:47517, Fax:12579, Internet:28815},
                   {Region: "Taranaki", NoAccess:828, Mobile:27672, Telephone:35046, Fax:9222, Internet:20916},
                    {Region: "ManawatuWanganui", NoAccess:2025, Mobile:57726, Telephone:72822, Fax:17892, Internet:44154},
                   {Region: "Wellington", NoAccess:2628, Mobile:123036, Telephone:150189, Fax:33993, Internet:105549},
                   {Region: "Tasman", NoAccess:363, Mobile:11343, Telephone:14889, Fax:5064, Internet:9657},
                   {Region: "Nelson", NoAccess:276, Mobile:11856, Telephone:15213, Fax:3873, Internet:9939},
                   {Region: "Marlborough", NoAccess:258, Mobile:11415, Telephone:14478, Fax:4704, Internet:9180},
                   {Region: "WestCoast", NoAccess:486, Mobile:7482, Telephone:10488, Fax:2769, Internet:5946},
                    {Region: "Canterbury", NoAccess:2664, Mobile:142947, Telephone:183507, Fax:48963, Internet:119355},];
var commInfo2013 = [{Region: "Northland", NoAccess:1473, Mobile:43572, Telephone:44445, Fax:8247, Internet:36855},
                   {Region: "Auckland", NoAccess:6153, Mobile:374853, Telephone:381018, Fax:67629, Internet:360360},
                   {Region: "Waikato", NoAccess:2934, Mobile:119133, Telephone:117585, Fax:21978, Internet:103269},
                   {Region: "BayOfPlenty", NoAccess:2100, Mobile:79875, Telephone:80691, Fax:14472, Internet:69828},
                   {Region: "Gisbourne", NoAccess:465, Mobile:11535, Telephone:11796, Fax:1890, Internet:9414},
                   {Region: "HawkesBay", NoAccess:1278, Mobile:44250, Telephone:46731, Fax:7776, Internet:38748},
                   {Region: "Taranaki", NoAccess:699, Mobile:33966, Telephone:35466, Fax:5796, Internet:29325},
                    {Region: "ManawatuWanganui", NoAccess:1668, Mobile:67476, Telephone:69828, Fax:11034, Internet:57852},
                   {Region: "Wellington", NoAccess:2190, Mobile:143778, Telephone:143184, Fax:19620, Internet:136011},
                    {Region: "Tasman", NoAccess:312, Mobile:14472, Telephone:15552, Fax:3087, Internet:13389},
                   {Region: "Nelson", NoAccess:222, Mobile:14871, Telephone:15756, Fax:2220, Internet:13944},
                   {Region: "Marlborough", NoAccess:264, Mobile:13944, Telephone:15045, Fax:2784, Internet:12714},
                   {Region: "WestCoast", NoAccess:417, Mobile:9090, Telephone:10620, Fax:1608, Internet:8643},
                    {Region: "Canterbury", NoAccess:2334, Mobile:166050, Telephone:174462, Fax:29925, Internet:153996},];








