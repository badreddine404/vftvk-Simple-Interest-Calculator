//the objective of this function is for compute interest.
function compute()
{
//  Create a variables called 'principal', 'rate', 'years' and assign to it the values of the input element "principal", "rate", "years"

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
      
// Create a variable called interest and assign to it the value of `principal * years * rate / 100
var interest = principal * years * rate /100; 
              
// convert the 'No of Years' into the actual year in the future.
var year = new Date().getFullYear()+parseInt(years);
                       
                          
   if(principal <=0){ //  When "Compute Interest" is clicked if Amount is <=0 show a alert message
                               
             alert("Enter a positive number");
            document.getElementById("principal").focus();

   }else{ /* else When "Compute Interest" is clicked if Amount is >=1  Get the reference to the element named 'result' and set its inner html property.
             the <mark> tag is for Make sure the numbers in the result are highlighted.
              */
              document.getElementById("result").innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",\<br\>at an interest rate of "+"<mark>"+rate+"</mark>"+"%\<br\>You will receive an amount of "+"<mark>"+interest+"</mark>"+",\<br\>in the year "+"<mark>"+year+"</mark>"+"\<br\>"
        }                                           
}

//this function reads the value of the range slider and displays it the `<span>`adjacent to the slider.
   function updateRate() 
     {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
     }