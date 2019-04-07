$(document).ready(function() {
  
  
    $.ajax({
      type: "GET",
      url: "eats.json",
      dataType: "json",
      success: function(responseData, status){
        var output = "<ul>";  
        $.each(responseData.businesses, function(i, item) {
          output += '<li><a href="' + item.url + '">';
          output += '<img title="' + item.name + '" src="' + item.image_url;
        output += '" alt="'; 
        output +=  '" />';
          output += item.name+'</a></li>';
        });
        output += "</ul>";
        $('#eatsoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });