
$("#search-button").click(function(){
    var things = $("input").val()
    
    fetch("https://api.soundcloud.com/tracks?q=meg&client_id=5aa8e389ba4e24b6106af5159ab3e344")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // var pic_url = data.data[0].images.original.url
        $(".container").html("<h1>" + data + "</h1>")

        //$(".container").append(`<img src=` + pic_url + '>');

    }); 


  
  
});