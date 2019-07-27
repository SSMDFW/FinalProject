$(document).ready(function () {
    // dropdown event listeners
    $('#citySelect,#zombieSelect').change(function(){
        //alert($('#citySelect').val());
        
        var selectedCity = $('#citySelect').val();
        var selectedZombie = $('#zombieSelect').val();
    
        if(selectedCity === "atlanta" && selectedZombie === "Living Dead Trilogy"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Atlanta01.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Atlanta01.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "atlanta" && selectedZombie === "The Walking Dead"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Atlanta02.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Atlanta02.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "atlanta" && selectedZombie === "Zombieland"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Atlanta03.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Atlanta03.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "atlanta" && selectedZombie === "28 Days Later"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Atlanta04.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Atlanta04.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "atlanta" && selectedZombie === "World War Z"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Atlanta05.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Atlanta05.gif");
            $('#description-image').addClass("gifImage");
    
        }  else if(selectedCity === "dallas" && selectedZombie === "Living Dead Trilogy"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Dallas01.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Dallas01.gif");
            $('#description-image').addClass("gifImage");
        }  else if(selectedCity === "dallas" && selectedZombie === "The Walking Dead"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Dallas02.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Dallas02.gif");
            $('#description-image').addClass("gifImage");
        }  else if(selectedCity === "dallas" && selectedZombie === "Zombieland"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Dallas03.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Dallas03.gif");
            $('#description-image').addClass("gifImage");
        }  else if(selectedCity === "dallas" && selectedZombie === "28 Days Later"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Dallas04.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Dallas04.gif");
            $('#description-image').addClass("gifImage");
        }  else if(selectedCity === "dallas" && selectedZombie === "World War Z"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Dallas05.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Dallas05.gif");
            $('#description-image').addClass("gifImage");
    
        } else if(selectedCity === "newyork" && selectedZombie === "Living Dead Trilogy"){
            $('#plotimages').attr('src', "static/images/gifs/plots/New_York01.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/New_York01.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "newyork" && selectedZombie === "The Walking Dead"){
            $('#plotimages').attr('src', "static/images/gifs/plots/New_York02.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/New_York02.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "newyork" && selectedZombie === "Zombieland"){
            $('#plotimages').attr('src', "static/images/gifs/plots/New_York03.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/New_York03.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "newyork" && selectedZombie === "28 Days Later"){
            $('#plotimages').attr('src', "static/images/gifs/plots/New_York04.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/New_York04.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "newyork" && selectedZombie === "World War Z"){
            $('#plotimages').attr('src', "static/images/gifs/plots/New_York05.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/New_York05.gif");
            $('#description-image').addClass("gifImage");
    
        } else if(selectedCity === "chicago" && selectedZombie === "Living Dead Trilogy"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Chicago01.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Chicago01.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "chicago" && selectedZombie === "The Walking Dead"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Chicago02.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Chicago02.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "chicago" && selectedZombie === "Zombieland"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Chicago03.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Chicago03.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "chicago" && selectedZombie === "28 Days Later"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Chicago04.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Chicago04.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "chicago" && selectedZombie === "World War Z"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Chicago05.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Chicago05.gif");
            $('#description-image').addClass("gifImage");
    
        } else if(selectedCity === "losangeles" && selectedZombie === "Living Dead Trilogy"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Los_Angeles01.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Los_Angeles01.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "losangeles" && selectedZombie === "The Walking Dead"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Los_Angeles02.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Los_Angeles02.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "losangeles" && selectedZombie === "Zombieland"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Los_Angeles03.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Los_Angeles03.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "losangeles" && selectedZombie === "28 Days Later"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Los_Angeles04.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Los_Angeles04.gif");
            $('#description-image').addClass("gifImage");
        } else if(selectedCity === "losangeles" && selectedZombie === "World War Z"){
            $('#plotimages').attr('src', "static/images/gifs/plots/Los_Angeles05.png");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/gifs/city/Los_Angeles05.gif");
            $('#description-image').addClass("gifImage");
        } else{
            // alert('0');
            $('#plotimages').attr('src', "static/images/gifs/plots/static_plot.jpg");
            $('#plotimages').addClass("plotimage");
            $('#description-image').attr('src', "static/images/starter_map.png");
            $('#description-image').removeClass("gifImage");
        }
    });
    
    $('#zombieSelect').change(function(){
        // alert($('#zombieSelect').val());
    
        var selectedZombie = $('#zombieSelect').val();
    
        if (selectedZombie === "Living Dead Trilogy"){
            $('#zombieimages').attr('src', "static/images/gifs/movie/Living_dead.gif");
            $('#zombieimages').addClass("staticImage");
        } else if (selectedZombie === "28 Days Later"){
            $('#zombieimages').attr('src', "static/images/gifs/movie/28_Days_Later.gif");
            $('#zombieimages').addClass("staticImage");
        } else if (selectedZombie === "World War Z"){
            $('#zombieimages').attr('src', "static/images/gifs/movie/world_war_z.gif");
            $('#zombieimages').addClass("staticImage");
        } else if (selectedZombie === "Zombieland"){
            $('#zombieimages').attr('src', "static/images/gifs/movie/zombieland.gif");
            $('#zombieimages').addClass("staticImage");
        } else if (selectedZombie === "The Walking Dead"){
            $('#zombieimages').attr('src', "static/images/gifs/movie/walking_dead.gif");
            $('#zombieimages').addClass("staticImage");
        } else{ 
            $('#zombieimages').attr('src', "static/images/gifs/movie/static_zombie.gif");
            $('#zombieimages').addClass("staticImage");
        }
    }); 


    $('#download-csv').click(function(){
        url = "static/data/zombies.csv";
        var win = window.open(url, '_blank');
    });
}); //end of $(document).ready(function () {