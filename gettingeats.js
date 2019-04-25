
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "eats.json",
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

  });
function dropDownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function function1() {
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

function function2() {
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

function function3() {
      $.ajax({
      type: "GET",
      url: "sortByReviewCountHL.json",
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
      $.ajax({
      type: "GET",
      url: "sortByReviewCountLH.json",
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
