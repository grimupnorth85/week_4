const whichGreeting = (timeOfDay) => {
    console.log(`good ${timeOfDay}`)
};

const greet = (time, fn) => {
    if (time < 1200){
        fn ('morning');
    }else if (time >= 1200 && time < 1800) {
        fn('afternoon');
    }else{
        fn('evening');
    }
    };
    
    greet(1400, whichGreeting);