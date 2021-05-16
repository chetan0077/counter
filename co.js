const counters =document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute ('data-target');
        const startingCount = Number(counter.innerHTML);

        const incr = targetCount /10;
        if (startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr )}`;
            setTimeout (updateCounter ,1000);
        }else {
            counter.innerHTML = targetCount;
        }
    }

    updateCounter ();
})
