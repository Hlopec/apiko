// Task #1
function printPowsOf2(number){
    if(typeof number == 'number') {
        let i = 1;
        do {
            console.log(i);
            i = i * 2;
          } while (i <= number);
    }else{
        console.log("incorrect type");
    }
}
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);


// Task #2
function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let result = 0;
    for(let i=0; i<=initialArray.length; i++){
        console.log(initialArray[i]);
        if(typeof initialArray[i] == 'number'){
            console.log(i);
            result += initialArray[i];
        }
    }
    console.log("Final = " + result);
   }
    
   calculateSumOfArray();

// Task #3
function printSeasonByMonth(month) {
    var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var transfrmedMonthName = month.toLowerCase()
    switch (transfrmedMonthName) {
        case 'december':
        case 'january':      
        case 'february':
          console.log( 'Winter' );
          break;
        case 'march':
        case 'april':      
        case 'may':
          console.log( 'Spring' );
          break;
        case 'june':
        case 'july':      
        case 'august':
          console.log( 'Summer' );
          break;
        case 'september':
        case 'october':      
        case 'november':
          console.log( 'Outhum' );
          break;
        default:
          console.log( 'SOMETHING WRONG' );
      }
}
    
   printSeasonByMonth("SEPTEMBER");
   printSeasonByMonth("NOVEMBER");
   printSeasonByMonth("JULY");
   printSeasonByMonth("APRIL");

   // Task #4
   function calculateWordsInString(string) {
    console.log(string);
   }
   calculateWordsInString("Easy string for count");
   calculateWordsInString("Easy");
   calculateWordsInString("Some string with a triple   space");
   calculateWordsInString("Some?  string, with a triple   space");