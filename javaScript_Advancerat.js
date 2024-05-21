const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();

//Closures
//En funktion kördes, det exekverades. Den kommer aldrig göra det igen
//Däremot kommer den komma ihåg att det finns referenser till dem variblerna
//Så childscope har alltid tillgång till parentscope men inte tvärtom

//Curying
//Man skapar en funktion som istället för att ta dem samtidigt alla
//värden så tas dem en åt gången
const multiply = (a, b) => a * b;
constCurriedMultiply = (a) => (b) => a * b;
const CurriedMultiply(3)(4);

//Compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1; 

compose(sum, sum)(5);

//Avoiding side effects, functional purity 
//Exempel på en side effect
//Bra att undvika är t.ex console.log 
//Gör man allt detta skapar man något vi kallar för deterministic
var a = 1;
function b() {
    a = 2;
}