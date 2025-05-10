function getItemsfromLocalStorage()
{
    for (let i = 0; i < localStorage.length; i++) 
    {
    const key = localStorage.key(i);
    //console.log(key);

    var doc = document.getElementById("CartItems");
    var temp = localStorage[key].split(",");
    console.log(temp);

    doc.innerHTML += "<div class = 'CartItem'><p class = 'carrName'>" + temp[0] + "</p>" + 
                "<p class = 'carrColor'>" + temp[1] + "</p>" +
                "<p class = 'carrDesc'>" + temp[2] + "</p>" +
                "<p class = 'carrPrice'>" + temp[3] + "</p>" +
                "<img class = 'carrPic' src='" + temp[4] + "'></div>";
    
    // for(let j = 0; j < temp.length; j++)
    // {
    //     doc.innerHTML += temp[j];
    // }

    }
}

function ClearCart()
{
    localStorage.clear();
    alert("Cleared Cart");
    console.log("cleared cart");
    location.reload();
}

document.onload = getItemsfromLocalStorage();
