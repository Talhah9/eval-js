'use strict';

/**  Drawbar : classe qui définit un ebarre de chargement 

@param {Number} sum:
@param {Number} nbr:

*/

var Drawbar = function Drawbar (sum, nbr){
    this.sum = sum;
    this.nbr = nbr;
}

/** Pourcentage de la barre */

Drawbar.prototype.pourcentageBarre = function(){
    if (this.sum <= this.nbr) {
        return 100;
    }
    return(100*this.nbr)/this.sum
}

/**
 * run
 */

 Drawbar.prototype.run = function() {
    var drawBar = document.createElement('div');
    var fullBar = document.createElement('div');

    drawBar.style.width = "90vw";
    drawBar.style.height = "10vh";
    drawBar.style.margin = "0 auto";
    drawBar.style.border = "2px solid black";

    fullBar.style.width = this.pourcentageBarre() + "%";
    fullBar.style.height = "100%";
    fullBar.style.backgroundColor = "red";

    drawBar.appendChild (fullBar);
    document.body.appendChild(drawBar);
 }

 var progress = new DrawBar(144,122);
 progress.run();

