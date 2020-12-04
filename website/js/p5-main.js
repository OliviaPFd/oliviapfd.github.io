var pages = [];
var pageText = "The pages that you have vistied are: ";

document.getElementById("button").onclick = function () {
    var commentText = document.getElementById("comment").value;
    if (document.getElementById("home").checked) {
        pages.push("Home");
    }
    if (document.getElementById("about-me").checked) {
        pages.push("About Me");
    }
    if (document.getElementById("my-education").checked) {
        pages.push("My Education");
    }
    if (document.getElementById("a-little-game").checked) {
        pages.push("A Little Game");
    }
    if (document.getElementById("comments").checked) {
        pages.push("Comments");
    }

    var arrayLen = pages.length;
    for (i = 0; i < arrayLen; i++) {
        pageText += pages[i] + ", ";
    }
    document.getElementById("pages").innerHTML = "<section id='pagesC'><p>" + pageText + "</p></section>";
    document.getElementById("commentSubmission").innerHTML = "<section id='commentSubmissionC'><p>You wrote the following in the comments: " + commentText + "</p></section>";
    var button = document.getElementById("button");
    button.remove();
}
