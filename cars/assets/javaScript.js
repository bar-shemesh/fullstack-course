var brand =[];
var carModel= [];
var date = [];
var imageURL = [];
var degem = [];
var monthPrice =[];
var checkbox = [];

function loadImage(){
    var nameData = document.getElementById("brand").value;       
    var textData = document.getElementById("carModel").value;     
    var numberData = document.getElementById("date").value;   
    var urlData = document.getElementById("imageURL").value;       
    var textData = document.getElementById("degem").value;     
    var textData = document.getElementById("monthPrice").value;    
    var checkboxData = document.getElementById("checkbox").value;
  
     
    brand.push(nameData); 
    carModel.push(textData);
    date.push(numberData);      
    imageURL.push(urlData); 
    degem.push(textData);   
    monthPrice.push(textData);
    checkbox.push(checkboxData);  


    createTable();
   
    document.getElementById("dataCar").reset();    
   
}

function createTable(){
    var data = document.getElementById("data");         

    var info = "";

    for (var index=0;index<imageURL.length;index++){
        info += `
        <tr>
            <td><img src="${brand[index]}"/></td>
            <td>${carModel[index]}</td>
            <td>${date[index]}</td>
            <td>${imageURL[index]}</td>
            <td>${degem[index]}</td>
            <td>${monthPrice[index]}}</td>
            <td>${checkbox[index]}</td>
        </tr>
    `
    }

    data.innerHTML=info;
}

// function removeLast(){
//     brand.pop();
//     carModel.pop();
//     date.pop();
//     imageURL.pop();
//     degem.pop();
//     monthPrice.pop();
//     checkbox.pop();
//     createTable();
// }