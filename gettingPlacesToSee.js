$(document).ready(function() {
  
  
    $.ajax({
      type: "GET",
      url: "placestosee.json",
      dataType: "json",

      success: function(responseData, status){
        var output = "";
        $.each(responseData.items, function(i, item) {
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
          output+= '<h4>'+item.name+'</h4></div>'

          }else{
           output +='<div class = "column">'
          output += '<a href="' + item.url + '">';
          output += '<img id = "myimage" title="' + item.name +'"class = "image"'+ 'src="' + item.image_url;
          output +=  '" />';
          output += '</a>';
          output+= '<h4>'+item.name+'</h4></div>'
          if((i+1)%3 == 0){
            /*output+='</div>'*/
          }
          }
        });
        output+='</div>'
        $('.seeoutput').html(output);
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  });
