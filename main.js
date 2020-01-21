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
        addTop5images(myArr);
    }
};

function addToTable(arr) {
    arr.sort(sortByPoints());
    var i;
    for(i = 0; i < arr.length; i++) {
            name=arr[i].username;
            points= arr[i].points;
            if (0<=i && i<3){
              var markup = "<tr><td><strong>"+ (i + 1) + "</strong></td><td><strong>" + "&nbsp;" + name + "</strong></td><td><strong>" + "&nbsp;" + points + "</strong></td></tr>";
            }
            else{
              var markup = "<tr><td>"+ (i + 1) + "</td><td> " + "&nbsp;" + name + "</td><td> " + "&nbsp;" + points + "</td></tr>";
            }
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

function addTop5images(arr){
   arr.sort(sortByPoints());
      var div = document.getElementById('fourth'); 
      div.innerHTML = '';
      var img = document.createElement('img'); 
      img.src = arr[3].img; 
      img.style.height = '150px';
      img.style.width = '150px';
      div.appendChild(img);
      div.append("FOURTH");
      var div = document.getElementById('third'); 
      div.innerHTML = '';
      var img = document.createElement('img'); 
      img.src = arr[2].img; 
      img.style.height = '150px';
      img.style.width = '150px';
      div.appendChild(img);
      div.append("THIRD");
      var div = document.getElementById('first'); 
      div.innerHTML = '';
      var img = document.createElement('img'); 
      img.src = arr[0].img; 
      img.style.height = '150px';
      img.style.width = '150px';
      div.appendChild(img);
      div.append("FIRST");
      var div = document.getElementById('second'); 
      div.innerHTML = '';
      var img = document.createElement('img'); 
      img.src = arr[1].img; 
      img.style.height = '150px';
      img.style.width = '150px';
      div.appendChild(img);
      div.append("SECOND");
      var div = document.getElementById('fifth'); 
      div.innerHTML = '';
      var img = document.createElement('img'); 
      img.src = arr[4].img; 
      img.style.height = '150px';
      img.style.width = '150px';
      div.appendChild(img);
      div.append("FIFTH");
      
}
