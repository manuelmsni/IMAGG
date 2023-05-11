/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * #IMAGG                                              *
 * @author manuelmsni <manuelmartinsantamaria.com>     *
 * version 1.0 || https://github.com/manuelmsni/IMAGG  *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function modalWindowForIMAGG() {
    if(document.getElementById("DivIMAGG") === null){
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
    }
};

function openTriggersForIMAGG() {
    var openTriggers = document.querySelectorAll(".triggerIMAGG");

        openTriggers.forEach(function (trigger) {

            trigger.addEventListener("click", function triggerIMGG() {
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = "17px";
                document.getElementById("DivIMAGG").style.overflowY = "scroll";
                document.getElementById("IMAGG").src = this.getAttribute("src");
                document.getElementById("TitleIMAGG").innerText = this.getAttribute("title");
                
                const caption = document.getElementById("CaptionIMAGG");

                // Clears the content of the caption element
                caption.innerHTML = '';

                const alt = this.getAttribute("alt");

                if(!this.hasAttribute("alt")){

                    console.log("The HTML standard states that the \"alt\" attribute in an \<img\> tag is mandatory in terms of semantics!");

                } else if(alt.includes("IMAGG_ls")){
                    // split method divides the original string into an array of substrings
                    const lines = alt.split("IMAGG_ls");

                    // map method applies a function to each element in the array and creates a new array of <p> tags
                    const paragraphs = lines.map(line => `<p>${line}</p>`);

                    // join method to combines all the <p> tags into a single string and set it as the content of the caption element
                    caption.innerHTML = paragraphs.join('');
                } else{
                    caption.innerHTML = `<p>${alt}</p>`;
                }
                
                document.getElementById("DivIMAGG").classList.remove('hidden');
            });
        
            /* Triggers to close the modal window */ 
        
            var closeTriggers = document.querySelectorAll(".exitIMAGG");

            closeTriggers.forEach(function (trigger) {
            
                trigger.addEventListener("click", function (e) {
                    if (e.target !== this) {
                    return;
                    }
                    document.getElementById("DivIMAGG").style.overflow = "hidden";
                    document.body.style.overflow = "auto";
                    document.body.style.marginRight = "0";
                    document.getElementById("DivIMAGG").classList.add('hidden');
                });
             
            });
            
        });
};

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        /* Generates the html for the modal window */
        modalWindowForIMAGG();
        /* Triggers to open the modal window */
        openTriggersForIMAGG();
    }
};
