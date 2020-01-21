var xmlhttp = new XMLHttpRequest();
url= "https://fierce-everglades-19959.herokuapp.com/getData/";
xmlhttp.open("GET", url, true);


xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById('leaderboard').innerHTML = 
        '<thead><tr><th>Rank</th><th>Github ID</th><th>Points</th></tr></thead><tbody></tbody>'; //same as original structure
        document.getElementById('loader').innerHTML = '';
        addToTable(myArr);
    }
};

function addToTable(arr) {
    arr.sort(sortByPoints());
    var i;
    for(i = 0; i < arr.length; i++) {
            name=arr[i].username;
            points= arr[i].points;
            var a="https://www.github.com/";
            link=a.concat(name);
            var result = name.link(link);
            if (0<=i && i<3){
              var markup = "<tr><td><strong>"+ (i + 1) + "</strong></td><td><strong>" + "&nbsp;" + result + "</strong></td><td><strong>" + "&nbsp;" + points + "</strong></td></tr>";
            }
            else{

              var markup = "<tr><td>"+ (i + 1) + "</td><td>" + "&nbsp;" + result + "</td><td> " + "&nbsp;" + points + "</td></tr>";            }
            $("table tbody").append(markup);
    }
}

function sortByPoints(){
   return function(a,b){
      if(a["points"] < b["points"])
         return 1;
      else if(a["points"] > b["points"])
         return -1;
      return 0;
   }
}
