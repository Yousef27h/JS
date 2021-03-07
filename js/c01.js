var order = prompt("Do you want coffee or tea?");

while (order != "tea" && order != "coffee")
{
  order = prompt("Do you want coffee or tea?");
}

var itemOrder = "";

if (order == "tea")
{
  itemOrder="<img src='images/tea.png' />" ;
}else 
{
  itemOrder = "<img src='images/coffee.png' />";
}

var num = prompt("How many cups?")
var cupNum = 1
for (var i=0; i<num; i++)
{
  document.write(itemOrder)
  document.write("Cup number "+ cupNum++)
}