var order = prompt("Do you want coffee or tea?");


while (order != "tea" && order != "coffee")
{
  order = prompt("Sorry, but We only have tea and coffee \n what's your choice? ");
}
var num = prompt("How many cups?");




function printingOrder(){

var confirmation = confirm("Do you want to change your order? \n OK if Yes, Cancel if NO")

while (confirmation){
  
  order = prompt("Do you want coffee or tea?");
  num = prompt("How many cups?");
  confirmation = confirm("Do you want to change your order?"  + '<br>' + "OK if Yes, Cancel if NO");

}
document.write("Your order is : "+ num+ " Cup(s) of "+ order + '<br>'  + '<br>')
}

printingOrder();

var itemOrder = "";
if (order == "tea")
{
  itemOrder="<img src='images/tea.png' />" ;
  document.write(itemOrder+ "<br>"+ "<br>")
}else 
{
  itemOrder = "<img src='images/coffee1.png' />";
  document.write(itemOrder+ "<br>"+ "<br>")
}