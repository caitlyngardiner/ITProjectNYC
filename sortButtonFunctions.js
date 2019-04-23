/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function function1() {
  alert("You Clicked on Anchor Tag 1");
  //ratings high to low
      $.ajax({
      type: "GET",
      url: "sortByRatingsHL.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "";
        var price = "N/A";
        $.each(responseData.businesses, function(i, item) {
         if(i == 0){
            output+='<div class = "container"'
          }
          if(i % 3 == 0){
            
          output +='<div class = "row">'
          output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+' </h3></div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+'</h3></div>'
          if((i+1)%3 == 0){
            /*output+='</div>'*/
          }
          }
        });
        output+='</div>'
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
}

function function2() {
  alert("You Clicked on Anchor Tag 2");
  //ratings low to high
      $.ajax({
      type: "GET",
      url: "sortByRatingsLH.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "";
        var price = "N/A";
        $.each(responseData.businesses, function(i, item) {
         if(i == 0){
            output+='<div class = "container"'
          }
          if(i % 3 == 0){
            
          output +='<div class = "row">'
          output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+' </h3></div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+'</h3></div>'
          if((i+1)%3 == 0){
            /*output+='</div>'*/
          }
          }
        });
        output+='</div>'
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
}

function function3() {
  alert("You Clicked on Anchor Tag 3");
  //review count high to low
      $.ajax({
      type: "GET",
      url: "sortByReviewHL.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "";
        var price = "N/A";
        $.each(responseData.businesses, function(i, item) {
         if(i == 0){
            output+='<div class = "container"'
          }
          if(i % 3 == 0){
            
          output +='<div class = "row">'
          output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+' </h3></div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+'</h3></div>'
          if((i+1)%3 == 0){
            /*output+='</div>'*/
          }
          }
        });
        output+='</div>'
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
}

function function4() {
  alert("You Clicked on Anchor Tag 4");
  //review count low to high
      $.ajax({
      type: "GET",
      url: "sortByReviewLH.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "";
        var price = "N/A";
        $.each(responseData.businesses, function(i, item) {
         if(i == 0){
            output+='<div class = "container"'
          }
          if(i % 3 == 0){
            
          output +='<div class = "row">'
          output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+' </h3></div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+'</h3></div>'
          if((i+1)%3 == 0){
            /*output+='</div>'*/
          }
          }
        });
        output+='</div>'
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
