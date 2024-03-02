let valueDisplays = document.querySelectorAll('.num');
let interval = 7000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        // setting the text content of element
        valueDisplay.textContent = startValue;

        if(startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
});

// duration is assigned value as (interval / endValue) so that all numbers should stop at single time giving smooth transition

// setInterval is used to repeat the function a specified interval of time, second argument is the time at which function is called
// clearInterval is used to stop the execution of function, second argument is the time at which it stops