// first create function read enter sentence id in index.html

function readEnterSentence(){
    //read id entersentence and store value in variable
   var storeEnterSentence =  document.getElementById("enterSentence").value + " " 
   //read value of choice  and store value in variable
   var storeValueofChoice =  document.getElementById("choice").value 
   var answer = " ";
   switch(storeValueofChoice){
    //if person choose choice A
    case "A": answer = storeEnterSentence.toUpperCase()
    break
    //in switch case break is a must
    case "B": answer = storeEnterSentence.toLowerCase()
    break
//charAt(0) means only get the first character- convert to upper case
//substring means start 2 character to the end change to lower case
    case "C": answer = storeEnterSentence.charAt(0).toUpperCase()+ storeEnterSentence.substring(1).toLowerCase()
    break
    //case d all word change only first cjaracter to upper case
    case "D": arr = storeEnterSentence.split(" ")
    for (var i = 0; i< arr.length; i++){
        answer += arr[i].charAt(0).toUpperCase()+  arr[i].substring(1).toLowerCase()  
    }

    break
}
document.getElementById('answer').value = answer
}