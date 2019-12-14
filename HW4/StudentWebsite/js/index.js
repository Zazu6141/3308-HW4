$(document).ready(function() {    
    var apiKey = "2a81f633383843b745c86984db4541c8" // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url

    Object.keys(state_info).forEach(function(key){
        var state_obj = state_info[key]
        var url =`https://api.darksky.net/forecast/${apiKey}/${state_obj['lat']},${state_obj['lng']}`;

        $.ajax({url:url, state:key, dataType:"jsonp"}).then(function(data) {
                    var state_name = this.state;

                    console.log(data)
                    var temperature = null
                    var temperature = data.currently.temperature;

                    console.log(state_name, temperature);


                    // Default #808080
                    $('#' + state_name).css('fill', "#808080");

                    if(temperature <= 10)
                    {
                      $('#' + state_name).css('fill', "#6495ED");
                    }
                    else if(temperature > 10 && temperature <= 20)
                    {
                      $('#' + state_name).css('fill', "#7FFFD4");
                    }
                    else if(temperature > 20 && temperature <= 30)
                    {
                      $('#' + state_name).css('fill', "#0000FF");
                    }
                    else if(temperature > 30 && temperature <= 40)
                    {
                      $('#' + state_name).css('fill', "#008B8B");
                    }
                    else if(temperature > 40 && temperature <= 50)
                    {
                      $('#' + state_name).css('fill', "#00BFFF");
                    }
                    else if(temperature > 50 && temperature <= 60)
                    {
                      $('#' + state_name).css('fill', "#F08080");
                    }
                    else if(temperature > 60 && temperature <= 70)
                    {
                      $('#' + state_name).css('fill', "#CD5C5C");
                    }
                    else if(temperature > 70 && temperature <= 80)
                    {
                      $('#' + state_name).css('fill', "#8B0000");
                    }
                    else if(temperature > 80 && temperature <= 90)
                    {
                      $('#' + state_name).css('fill', "#B22222");
                    }
                    else if(temperature > 90)
                    {
                      $('#' + state_name).css('fill', "#FF0000");
                    }

        });
    });
});