
function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    showCopyNotification();
}

function showCopyNotification() {
    var notification = document.getElementById("copyNotification");
    notification.style.display = "block";

    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
}
