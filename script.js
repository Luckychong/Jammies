
$("#search-button").click(function(){
    var things = $("input").val()

    
    fetch("https://api.soundcloud.com/tracks?q="+things+ "&client_id=5aa8e389ba4e24b6106af5159ab3e344")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // var pic_url = data.data[0].images.original.url
    
        data.forEach(function(song){
         $(".gallery").append('<div class= "container" >'  ) 
            $(".gallery").append('<div class= "col-4" >'  ) 
                $(".gallery").append(`<a href= "${song.permalink_url}">` + song.title + "</a>")
            $(".gallery").append("</div>" ) 
            $(".gallery").append('<div class= "col-4" >'  ) 
                $(".gallery").append(`<img src=` + song.artwork_url + '>');
            $(".gallery").append("</div>" ) 
            $(".gallery").append('<div class= "col-4" >'  ) 
                $(".gallery").append("<h1>" + song.duration + "</h1>")
            $(".gallery").append("</div>" ) 
        $(".gallery").append("</div>" )
	    });
    }); 

});