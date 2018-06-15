(function(){

    var module = angular.module('SearchApp', []).controller('searchController',SearchController);
    
    function SearchController(){

        var _self = this;
        _self.title = "Search Required Skill Sets";
        _self.requiredPerson = {};

        /* Input JSon */
        _self.skillSets = [{
            "name" : "Ethan",
            "experience" : 10,
            "skills" : ["C","C++","Java","J2EE"],
            "preferedLoc" : ["Hyderabad","Bangalore","Chennai"],
            "currentLoc" : ["Hyderabad"]
        },
        {
            "name" : "Mathews",
            "experience" : 5,
            "skills" : ["Angular","React","Java","J2EE"],
            "preferedLoc" : ["Noida","Delhi","Pune"],
            "currentLoc" : ["Nodia"]
        },
        {
            "name" : "Nate Fuller",
            "experience" : 15,
            "skills" : ["Scala","Java","J2EE"],
            "preferedLoc" : ["Hyderabad","Bangalore","Chennai"],
            "currentLoc" : ["Chennai"]
        }]
    }
    
    SearchController.prototype.retrievePatterns = function(matchers){

        console.log(matchers);
        var _self = this;

        //Get Required SKill Set Technologies
        _self.technologyStack = [];
        _self.technologyStack = matchers.skillSet.split(',');
        console.log(_self.technologyStack);

        var pushPersons = [];
        _self.requiredPersons = _self.skillSets.filter((item,index) =>{
            _self.technologyStack.forEach(element => {
                if(item.skills.indexOf(element)!== -1){
                    pushPersons.push(item);
                }
            });
            console.log(pushPersons);
            return pushPersons;

        })

    }

})()
