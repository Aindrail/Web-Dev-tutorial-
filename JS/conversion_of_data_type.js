 //String Conversion
 String(123) //explicit
 123 + ''//implicit

 //Boolean Conversion
 Boolean(2) //explicit
 if(2){   } //implicit due to logical context
 !!2  // implicit due to logical operator
 2 || 'hello' //implicit due to logical operator

 //Numeric Conversion
 Number('123') //explicit
 +'123' //implicit
 123 != '456' //implicit