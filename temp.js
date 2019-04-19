$(document).ready(function() {
  
  
    $.ajax({
      type: "GET",
      url: "eats.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "<ul>";  
        $.each(responseData.businesses, function(i, item) {
          if(i%5 == 0){
          output+='<div class = "row"><div class = "column"'
          output += '<li><a href="' + item.url + '">';
          output += '<img title="' + item.name + '" src="' + item.image_url;
          output += '" alt="'; 
          output +=  '" />';
          output += '</a></li>';
          output+= '<div class="overlay">'+item.name+'</div>'
          output += '</div>';

          }else{
          output+='<div class = "column"'
          output += '<li><a href="' + item.url + '">';
          output += '<img title="' + item.name + '" src="' + item.image_url;
          output += '" alt="'; 
          output +=  '" />';
          output += '</a></li>';
          output+= '<div class="overlay'+item.name+'</div>'
          output += '</div>';
          if((i+1)%5 == 0){
            output+='</div>'
          }
          }
        });
        output += "</div></ul>";
        $('.eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });
