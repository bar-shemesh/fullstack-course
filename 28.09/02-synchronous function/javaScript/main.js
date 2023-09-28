const myFunc = () => {
    console.log('start myfunc'); //1
    anotherFunc();
    console.log('finish myfunc'); //5
}

const anotherFunc = () => {
    let sum = 0;
    for(let i=0; i<100000000; i++){
        sum += i;
    }
    console.log(sum);

}
