/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * #IMAGG                                              *
 * @author manuelmsni <manuelmartinsantamaria.com>     *
 * version 1.0 || https://github.com/manuelmsni/IMAGG  *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

document.onreadystatechange = () => {
    
    
    if (document.readyState === "complete") {

        /* Generates the html for the modal window */

        function modalWindowForIMAGG() {
            var divIMAGG = document.createElement("div");
            divIMAGG.id = "DivIMAGG";
            divIMAGG.classList.add("hidden", "exitIMAGG");
        
            var bodyIMAGG = document.createElement("div");
            bodyIMAGG.id = "BodyIMAGG";
        
            var exitIMAGG = document.createElement("a");
            exitIMAGG.id = "ExitIMAGG";
            exitIMAGG.innerHTML = "X";
            exitIMAGG.classList.add("exitIMAGG");
        
            var pExitIMAGG = document.createElement("p");
            pExitIMAGG.appendChild(exitIMAGG);
        
            var figure = document.createElement("figure");
        
            var imgIMAGG = document.createElement("img");
            imgIMAGG.id = "IMAGG";
            imgIMAGG.src = "";
        
            var h2TitleIMAGG = document.createElement("h2");
            h2TitleIMAGG.id = "TitleIMAGG";
        
            var figcaptionIMAGG = document.createElement("figcaption");
            figcaptionIMAGG.id = "CaptionIMAGG";
        
            figure.appendChild(imgIMAGG);
            figure.appendChild(h2TitleIMAGG);
            figure.appendChild(figcaptionIMAGG);
        
            bodyIMAGG.appendChild(pExitIMAGG);
            bodyIMAGG.appendChild(figure);
        
            divIMAGG.appendChild(bodyIMAGG);
            document.body.appendChild(divIMAGG);
        };

        modalWindowForIMAGG();

        /* Triggers to open the modal window */

        var openTriggers = document.querySelectorAll(".triggerIMAGG");

        openTriggers.forEach(function (trigger) {

            trigger.addEventListener("click", function triggerIMGG() {
                document.body.style.overflow = "hidden";
                document.getElementById("DivIMAGG").style.overflowY = "scroll";
                document.getElementById("IMAGG").src = this.getAttribute("src");
                document.getElementById("TitleIMAGG").innerText = this.getAttribute("title");
                document.getElementById("CaptionIMAGG").innerText = this.getAttribute("alt");
                document.getElementById("DivIMAGG").style.display = "block";
            });
        
            /* Triggers to close the modal window */ 
        
            var closeTriggers = document.querySelectorAll(".exitIMAGG");

            closeTriggers.forEach(function (trigger) {
            
                trigger.addEventListener("click", function (e) {
                    if (e.target !== this) {
                    return;
                    }
                    document.getElementById("DivIMAGG").style.overflow = "hidden";
                    //document.body.style.overflow = "auto";
                    document.getElementById("DivIMAGG").style.display = "none";
                });
             
            });
            
        });
    }
};
