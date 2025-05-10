function ChangeTitle()
{
    var temp = sessionStorage.getItem("clicked").split(",");
    console.log(temp);

    document.getElementById("title").innerHTML = temp[0];

    document.getElementById("itemsMain").innerHTML = "<div class = 'ItemProduct'>"+
                "<img class = 'itemPic' src='" + temp[4] + "'>" +
                "<div class = 'Desc'><h3 class = 'itemName'>" + temp[0] + "</h3>" + 
                "<p class = 'itemColor'>" + temp[1] + "</p>" +
                "<p class = 'itemDesc'>" + temp[2] + "</p>" +
                "<p class = 'itemPic'>" + temp[3] + "</p>" +"</div></div>";;
}

document.onload = ChangeTitle();