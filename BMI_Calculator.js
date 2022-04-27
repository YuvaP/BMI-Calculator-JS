function calculateBMI(){
    var feet=document.getElementById("feet").value;
    feet = parseInt(feet);
    var inches=document.getElementById("inches").value;
    inches=Number(inches);
    var totalHeight=feet*12+inches;
 
    var pounds=document.getElementById("pounds").value;
    if (totalHeight==null || totalHeight=="" || pounds==null || pounds=="")
    {
        alert("Please enter the value for height and Weight. It cannot be blank or empty!! ")
    }
    else if((isNaN(totalHeight)) || isNaN(pounds))
    {
        alert("Please enter the numbers only. Do not use strings")
    }
    else{
    var bmiHeight = totalHeight*totalHeight;
    var bmi=pounds/bmiHeight*703;
    console.log(bmi);
    bmiValue.value=bmi;
    

    
    setTimeout(myRandomImage,2000);
    if (bmi<18.5)
    {
        yourResult="Underweight. Please start taking care of your health."
    }
    else if((bmi>=18.5)&&(bmi<=24.9)){
        yourResult="Normal or Healthy Weight. Keep it up!!!."
    }
    else if((bmi>=25.0)&&(bmi<=29.9)){
        yourResult="Overweight. Please start taking care of your health."
    }
    else{
        yourResult="Obesity. Time to be serious about your health."
    }
    document.getElementById("yourResult").value=yourResult;
}
}
function myRandomImage(){
    var myPix = new Array("exercise1.PNG","exercise2.PNG","exercise3.PNG","exercise4.PNG");
    var myNumber = myPix.length;
    var myNumber = Math.floor(Math.random()*myPix.length); 
    document.getElementById("myImage").src=myPix[myNumber];
}

function clearValue(){
    document.getElementById("feet").value="";
    document.getElementById("inches").value="";
    document.getElementById("pounds").value="";
    document.getElementById("bmiValue").value="";
    document.getElementById("myImage").src="";
    document.getElementById("yourResult").value="";
}