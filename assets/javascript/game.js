var hanSolo = {
    name: "Han Solo",
    health: 100,
    attackStart: 15,
    attack: 15,
}
var ig88 = {
    name: "IG-88",
    health: 120,
    attackStart: 12,
    attack: 12,
}
var bobaFett = {
    name: "Boba Fett",
    health: 180,
    attackStart: 8,
    attack: 8,
}
var jabbaTheHutt = {
    name: "Jabba The Hutt",
    health: 200,
    attackStart: 2,
    attack: 2,
}

var wins = 0;
var losses = 0;
var fighterArray = [hanSolo, ig88, bobaFett, jabbaTheHutt];
var userChar = {};
var defender = {};
var attackerSlotFilled = false;
var defSlotfilled = false;
var resetGame = false;
var gameOver = false;


//Select user character
function charSelect() {
    $(".char-choice").on("click", function () {
        $("#user-pick-one").append($(".char-choice"));
        attackerSlotFilled === true;
        $(this).attr("class", "first-choice");
        console.log(this);
        $(".char-choice").removeAttr("class", "char-choice").attr("class", "availDef");
        $("#choice-other").append($(".availDef"));
    $(".availDef").on("click", function () {
        $(this).removeAttr("class", "availDef").attr("class", "second-choice");
        $("#opponent").append($(".second-choice"));
        defSlotfilled === true;
        console.log(this);
    })
    });
}


$(document).ready(function(){  

    charSelect();
    
});

