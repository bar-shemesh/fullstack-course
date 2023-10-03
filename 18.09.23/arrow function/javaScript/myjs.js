function invoke(){
    func1(function(){console.log("hello"); });
}
func2(function(a, b, c) {console.log(`sum is ${a+b+c}`)});
func2((a,b,c)=> console.log(`sum is${a+b+c}`));

func3(function(height) { console.log(`height is ${height}`); })
    