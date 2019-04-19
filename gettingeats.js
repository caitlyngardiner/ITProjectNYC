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
          output += '<img title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<div class="overlay"><h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+' </h3></div>'
          output+='</div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<div class="overlay"><h4>'+item.name+'</h4><h3>Rating: '+item.rating+' stars</h3><h3>Price: '+item.price+'</h3></div>'
          output+='</div>'
          if((i+1)%3 == 0){
            output+='</div>'
          }
          }
        });
        output+='</div></div>'
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });
