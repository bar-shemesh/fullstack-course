function divide(){
    const num = +prompt("how many PI digits?");
    try{
        const pi = math.PI.toFixed(num);
        console.log(pi);
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
    } finally{
        console.log("in finally");
    }
    console.log("done...")

}