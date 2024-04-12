
function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    document.getElementById("copyButton").innerText = "Copied";
                setTimeout(function() {
                    // Revert text back to "Copy ip" after 2 seconds
                    document.getElementById("copyButton").innerText = "Copy ip";
                }, 2000);
}
// $(document).ready(function () {
//     $(".mouse").click(function () {
//         $('html, body').animate({scrollTop: '+=1000px'}, 200);
//     });   
// });
// $(document).ready(function () {
//     $(".mouse1").click(function () {
//         $('html, body').animate({scrollTop: '+=1000px'}, 200);
//     });   
// });