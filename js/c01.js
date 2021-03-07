var order = prompt("Do you want coffe or tea?");

while (order != "tea" && order != "coffee")
{
  order = prompt("Do you want coffe or tea?");
}

var itemOrder = "";

if (order == "tea")
{
  itemOrder="<img src='images/tea.png' />" ;
}else 
{
  itemOrder = "<img src='images.coffee.png' />";
}

var num = prompt("How many cups?")
for (var i=0; i<num; i++)
{
  document.write(itemOrder)
}