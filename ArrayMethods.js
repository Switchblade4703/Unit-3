var words = [];

var outputContainer = document.getElementById("output");

var count = 0;

function update()
{
    outputContainer.innerHTML = "";
    
    // words.forEach(element => {
    //     count++;
    //     var html = outputContainer.innerHTML;
    //     var msg = html + count + ": " + element + "</br>";
    //     outputContainer.innerHTML = msg
    // });

    let str = words.reduce( (prev, current, currentIndex) => 
    {
     var msg = prev + (currentIndex + 1) + ": " + current + "<br>";
     return msg;
    }, 0);
    outputContainer.innerHTML = str;
}

function arrMap()
{
    var input = document.getElementById('text').value;

    words = words.map((current) => {
    current = input + current;
    return current;
    });
} 

document.getElementById("pop").addEventListener("click", () => {
    words.pop();
    update();
});

document.getElementById("shift").addEventListener("click", () => {
    words.shift();
    update();
});

document.getElementById("push").addEventListener("click", () => {
    var item = document.getElementById('text').value;
    words.push(item);
    update();
});

document.getElementById("unshift").addEventListener("click", () => {
    var item = document.getElementById('text').value;
    words.unshift(item);
    update();
});

document.getElementById("map").addEventListener("click", () => {
    arrMap();
    update();
});