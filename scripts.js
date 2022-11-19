var counter = document.getElementById('counter');
var count = 0

function increment() {
    count += + 1;
    counter.textContent = count
}
function decrement() {
    count += - 1;
    counter.textContent = count;
}

