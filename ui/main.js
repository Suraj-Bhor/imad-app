// console.log('Loaded!');



// var element = document.getElementById("main-text");

// element.innerHTML = "New Value";

// var img = document.getElementById("madi");

// var marginLeft = 0;
// function moveRight()
// {
//     marginLeft = marginLeft  + 1;
//     madi.style.marginLeft = marginLeft + 'px';
// }

// madi.onclick = function()
// {
//     var interval = setInterval(moveRight,50);
    
// };


var button = document.getElementById('counter');
var counter = 0;
button.onClick = function()
{
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
