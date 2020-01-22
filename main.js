var xmlhttp = new XMLHttpRequest();
url= "https://fierce-everglades-19959.herokuapp.com/getData/";
xmlhttp.open("GET", url, true);


xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById('leaderboard').innerHTML = 
        '<thead><tr><th>Rank</th><th>&nbsp;Photo</th>&nbsp;<th>Github ID</th><th>Points</th><th>&nbsp;Details</th></tr></thead><tbody></tbody>'; //same as original structure
        document.getElementById('loader').innerHTML = '';
        addToTable(myArr);
        addTop5images(myArr);
    }
};

function addToTable(arr) {
    arr.sort(sortByPoints());
    var i;
    for(i = 5; i < arr.length; i++) {
            name=arr[i].username;
            points= arr[i].points;
			img = arr[i].img;
            /*if (0<=i && i<3){
              var markup = "<tr><td><strong>"+ (i + 1) +"</strong></td><td><strong>" +'<img src="' +img+ '" alt="Italian Trulli" style="width:50px; height:50px;">' + "</strong></td><td><strong>" + "&nbsp;" + name + "</strong></td><td><strong>" + "&nbsp;" + points + "</strong></td></tr>";
            }
            else{*/
              var markup = "<tr><td>"+ (i + 1) +"</strong></td><td><strong>" +'<img src="'+img+ '" alt="Italian Trulli" style="width:50px; height:50px;">' + "</td><td> " + "&nbsp;" + name + "</td><td> " + "&nbsp;" + points + "</td><td>" + "&nbsp;" + "<a href=search.html?q="+name+">"+"<img src=\"img/arrow.svg\" height=30px width=30px></a>" + "</td></tr>";

            //}
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
      var ids = ['first', 'second', 'third', 'fourth', 'fifth'];
      var div = document.getElementById("top5");
      div.className = "row table table-success table-bordered table-hover border border-dark rounded w-100";
      div.style = "font-size: 85%; font-weight: bold; align-self: auto; column-width:auto; margin-bottom: 10px; padding-top: 10px; padding-bottom: 10px;"
      
      for(var i=0;i<5;i++)
      {
         var div = document.getElementById(ids[i]); 
         div.innerHTML = '';
         var img = document.createElement('img'); 
         img.src = arr[i].img; 
         img.style.height = '150px';
         img.style.width = '150px';
         div.appendChild(img);
         var idtoupper = ids[i].toUpperCase();
         var markup = document.createElement('html');
         markup = idtoupper +"\t\t" + arr[i].username + " |" + arr[i].points + "|" ;
         div.append(markup);
         var link = document.createElement('a');
         link.href = "search.html?q="+arr[i].username;
         var imgd = document.createElement('img'); 
         imgd.src = "https://marketplace.canva.com/MACq7KcSUB8/1/screen/canva-arrow-shapes-simple-icon-MACq7KcSUB8.svg"; 
         imgd.style.height = '30px';
         imgd.style.width = '30px';
         link.appendChild(imgd);
         div.appendChild(link);
      }
      
}