let number = 10;

// let paragraph = document.getElementById('countdown');
// let downloadButton = document.getElementById('download');

function function10(number,callback){
    setTimeout(function(){
        callback(`Countdown from ${number}`);   
    },1000);
}

function10(number,(message) => {
    console.log(message);
    number--;
    function function9(number,callback){
        setTimeout(function(){
            callback(`Countdown from ${number}`);
        },1000);
    }
    function9(number,(message) => {
        console.log(message);
        number--;
        function function8(number,callback){
            setTimeout(function(){
                callback(`Countdown from ${number}`);
            },1000);
        }
        function8(number,(message) => {
            console.log(message);
            number--;
            function function7(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function7(number,(message) => {
                console.log(message);
                number--;
                function function6(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function6(number,(message) => {
                console.log(message);
                number--;
                function function5(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function5(number,(message) => {
                console.log(message);
                number--;
                function function4(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function4(number,(message) => {
                console.log(message);
                number--;
                function function3(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function3(number,(message) => {
                console.log(message);
                number--;
                function function2(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function2(number,(message) => {
                console.log(message);
                number--;
                function function1(number,callback){
                setTimeout(function(){
                    callback(`Countdown from ${number}`);
                },1000);
            }
            function1(number,(message) => {
                console.log(message);
                function function0(callback){
                    setTimeout(function(){
                        callback(`Happy Independance Day`);
                    },1000);
                }
                function0((message) => {
                    console.log(message);
                })
            })
            })
            })
            })
            })
            })
            })
        })    
    })
})




