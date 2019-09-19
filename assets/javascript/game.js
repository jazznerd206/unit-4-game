var hanSolo = {
    name: "Han Solo",
    health: 100,
    baseHealth: 100,
    baseDamage: 15,
    appliedDamage: 15,
    elementName: "#Han",
}
var ig88 = {
    name: "IG-88",
    health: 120,
    baseHealth: 120,
    baseDamage: 12,
    appliedDamage: 12,
    elementName: "#IG",
}
var bobaFett = {
    name: "Boba Fett",
    health: 180,
    baseHealth: 180,
    baseDamage: 8,
    appliedDamage: 8,
    elementName: "#Boba",
}
var jabbaTheHutt = {
    name: "Jabba The Hutt",
    health: 200,
    baseHealth: 200,
    baseDamage: 2,
    appliedDamage: 2,
    elementName: "#Jabba",
}

var wins = 0;
var losses = 0;
var userChar = {};
var defender = {};
var attackerSlotFilled = false;
var defSlotfilled = false;
var resetGame = false;
var gameOver = false;

$(document).ready(function(){  
    $("#shoot").on('click', attack);
    assignEventHandlers();
    updateGameState();
});

//Select user character
function assignEventHandlers() {
    $(document).on("click", ".char-choice", selectAttacker);
    $(document).on("click", ".availDef", selectDefender);
    $("#reset").on("click", function(){
        loseGame();
        wins = 0;
    });

}

//FUNCTION FOR PICKING THE USER ATTACKER
function selectAttacker() {
    if (!attackerSlotFilled) {
        switch (this.id) {
            case "Han": userChar = hanSolo; break;
            case "IG": userChar = ig88; break;
            case "Boba": userChar = bobaFett; break;
            case "Jabba": userChar = jabbaTheHutt; break;
        }
        $("#user-pick-one").append($(".char-choice"));
        attackerSlotFilled = true;
        $(this).attr("class", "first-choice");
        console.log(this);
        $(".char-choice").removeClass("char-choice").addClass("availDef");
        $("#choice-other").append($(".availDef"));
    }
}

//FUNCTION FOR PICKING THE FIRST DEFENDER
function selectDefender() {
    if (attackerSlotFilled = true) {
        if (!defSlotfilled) {
            switch (this.id) {
                case "Han": defender = hanSolo; break;
                case "IG": defender = ig88; break;
                case "Boba": defender = bobaFett; break;
                case "Jabba": defender = jabbaTheHutt; break;
            }
            $(this).removeAttr("class", "availDef").attr("class", "second-choice");
            $("#opponent").append($(".second-choice"));
            defSlotfilled = true;
            console.log(this);
        }
    }
}
//Attack function
function attack() {
    if (attackerSlotFilled && defSlotfilled && !gameOver) {
        defender.health -= userChar.appliedDamage;
        userChar.appliedDamage += userChar.baseDamage;
        userChar.health -= defender.baseDamage;
        updateGameState();
    }
}

//function for update game state
function updateGameState () {
    if (userChar.health <= 0) {
        losses++;
        displayGameState();
        $("#battleground").text("You suck");
        loseGame();
    } else if (defender.health <= 0) {
        wins++;
        $(defender.elementName).hide();
        $("#user-pick-one").append($(defender.elementName));
        defSlotfilled = false;
        displayGameState();
        $("#battleground").text("You have won, but how about the next....");
    }
    if (userChar.health >= 0 && wins === 3) {
        displayGameState();
        $("#battleground").text("You have whooped ass");
    }
}
//report new values for health and hit points
//print to screen
function displayGameState () {
    $("#battleground").text("You have caused " + userChar.appliedDamage + " damage to your opponent, and they have caused " + defender.baseDamage + " to you.")
    $(userChar.elementName).children(".health-points").text(userChar.health);
    $(defender.elementName).children(".health-points").text(defender.health);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

//GAME RESET
function loseGame () {
    $("#user-pick-one").append($(userChar.elementName));
    userChar.health = userChar.baseHealth;
    userChar.appliedDamage = userChar.baseDamage;
}

//
function winGame() {
    $("#user-pick-one").append($(userChar.elementName));
    userChar.health = userChar.baseHealth;
    userChar.appliedDamage = userChar.baseDamage;
    $("#battleground").text("You have won!!");
}