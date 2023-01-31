/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * #IMAGG (jQuery version)                             *
 * @author manuelmsni <manuelmartinsantamaria.com>     *
 * version 1.0 || https://github.com/manuelmsni/IMAGG  *
 * dependencies: jQuerry                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ready(
    function modalWindowForIMAGG(){
        var divIMAGG = $("<div>", {id: "DivIMAGG", class: "hidden exitIMAGG"});
        var bodyIMAGG = $("<div>", {id: "BodyIMAGG"});
        var exitIMAGG = $("<a>", {id: "ExitIMAGG", html: "X", class: "exitIMAGG"});
        var pExitIMAGG = $("<p>").append(exitIMAGG);
        var figure = $("<figure>");
        var imgIMAGG = $("<img>", {id: "IMAGG", src: ""});
        var h2TitleIMAGG = $("<h2>", {id: "TitleIMAGG"});
        var figcaptionIMAGG = $("<figcaption>", {id: "CaptionIMAGG"});

        bodyIMAGG.append(pExitIMAGG, figure);
        figure.append(imgIMAGG, h2TitleIMAGG, figcaptionIMAGG);
        divIMAGG.append(bodyIMAGG);
        $("body").append(divIMAGG);
    }, 
    $('.triggerIMAGG').on('click', function openModalWindow(){
        $("body").css('overflow','hidden');
        $("#DivIMAGG").css('overflow-y','scroll');
        document.getElementById("IMAGG").src = $(this).attr('src');
        $("#TitleIMAGG").text($(this).attr('title'));
        $("#CaptionIMAGG").text($(this).attr('alt'));
        $("#DivIMAGG").fadeIn('slow');

        $('.exitIMAGG').on('click', function closeModalWindow(e){
            if (e.target !== this)
            return; 
            $("#DivIMAGG").css('overflow','hidden');
            $("body").css('overflow','auto');
            $("#DivIMAGG").fadeOut('slow');
        })
    }) 
);