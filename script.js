var square = document.querySelectorAll(".square")
var showAll = document.querySelector("#showAll");
var hideAll = document.querySelector("#hideAll")

showAll.addEventListener("click", function () {
    square.forEach(function (element) {
        element.style.display = "block";
    })
})


hideAll.addEventListener("click", function () {
    square.forEach(function (element) {
        element.style.display = "none";
    })
})
//b

var filter = document.querySelector("#filter");

filter.addEventListener("keyup", function () {
    var colorName = filter.value;

    square.forEach(function (box) {
        if (box.classList.contains(colorName)) {
            box.style.display = "block";
        }

        else if (colorName == "") {
            box.style.display = "block";
        }


        else {
            box.style.display = "none";
        }
    })

})

//part 2
square.forEach(function (box) {
    box.addEventListener("mouseover", function () {
        box.style.height = "200px"
        box.style.width = "250px"
    })

    box.addEventListener("mouseout", function () {
        box.style.height = "180px"
        box.style.width = "230px"
    })
})