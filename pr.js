var xmlhttp = new XMLHttpRequest();
url= "https://fierce-everglades-19959.herokuapp.com/getData/";
xmlhttp.open("GET", url, true);


xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById('leaderboard').innerHTML = 
        '<thead><tr><th>Rank</th><th>&nbsp;   Photo</th>&nbsp; <th>Github ID</th><th>PR Merged</th></tr></thead><tbody></tbody>'; //same as original structure
        document.getElementById('loader').innerHTML = '';
        addToTable(myArr);
        addTop5images(myArr);
    }
};

function addToTable(arr) {
    arr.sort(sortByPoints());
    var i;
    for(i = 0; i < arr.length; i++) {
            name=arr[i].username;
            prPts=arr[i].prPoints
			ans=prPts.length
			img = arr[i].img;
              var markup = "<tr><td><strong>"+ (i + 1) +"</strong></td><td><strong>" +'<img src="' +img+ '" alt="Italian Trulli" style="width:50px; height:50px;">' + "</strong></td><td><strong>" + "&nbsp;" + name + "</strong></td><td><strong>" + "&nbsp;" + ans + "</strong></td></tr>";
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
