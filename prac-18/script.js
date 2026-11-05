
var message = document.getElementById("message");
var count = document.getElementById("count");

message.addEventListener("input", function() {

    var total = message.value.length;

    count.textContent = total;

});
