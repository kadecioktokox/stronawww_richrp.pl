$(document).ready(()=>{
    console.log("Ready")
    $('body').fadeIn()

    setInterval(()=>{
        $.getJSON("https://discordapp.com/api/guilds/561253967762554902/widget.json", function( data ) {
            $('#players-count').text(data["channels"][1].name)
        })
    }, 5000)

    /*/$.getJSON("./team.json?v=9", function( data ) {
        let team = "";
        $.each(data, function(key, value){
            let persons = ""
            $.each(value.persons, function(key2, value2){
                persons += `<h4>${value2}</h4>`
            })
            team += `
                <h3 style='color: ${value.color};'>${key}</h3>
                <div>
                    <h4 class='team-desc'>${value.description}</h4>
                    <hr>
                    ${persons}
                </div>
            `
        })
        $('.team').html(team)
        $(".team" ).accordion();
    }) /*/

    
    $('body').scroll(function(e){
        if($(this).scrollTop() > 984){
            $('nav').fadeIn()
        }else{
            $('nav').fadeOut()
        }
    })

    setTimeout(()=>{
        document.querySelector('main').scrollIntoView({
            behavior: 'smooth' 
        });
    }, 300)
})

