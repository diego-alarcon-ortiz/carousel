let index = 1;

$(() => {
    for (let i = 1; i <= 6; i++) {
        $("#carousel-container").append($(`<img src="./media/img${i}.jpg" id='img${i}' class="img">`));
    }

    $("#next").on("click", () => {
        avanzar(index);
    });

    $("#prev").on("click", () => {
        retroceder(index);
    });
});

function avanzar(actual) {
    let imgs = $(".img");
    if (actual < imgs.length) {
        $("#carousel-container").animate({
            scrollLeft: 960 * actual
        }, 500);
        index++;
    } else {
        index = 1;
        $("#carousel-container").animate({
            scrollLeft: 0
        }, 500);
    }
}

function retroceder(actual) {
    if (actual > 1) {
        $("#carousel-container").animate({
            scrollLeft: 960 * (index - 1) - 960
        }, 500);
        index--;
    } else {
        index = 6;
        let imgs = $(".img");
        $("#carousel-container").animate({
            scrollLeft: 960 * imgs.length
        }, 500);
    }
}