let scoreboard = document.getElementById("scoreboard");
let saveBtn = document.getElementById("saveBtn");
//let players;

let players = [];
if(localStorage.getItem("players")){
    players = JSON.parse(localStorage.getItem("players"));
    let players = [];
};

function printPlayers(){
    scoreboard.innerHTML = "";

    for(let player in players){     
        let playerBox = document.createElement("div");
        playerBox.id = players[player].playerName;
        playerBox.classList = "player";
        playerBox.innerHTML = players[player].playerName + '<button class="dec">-</button>'+ players[player].score + '<button class="inc">+</button>';
        scoreboard.append(playerBox);   
        localStorage.setItem("players", JSON.stringify(players));
    }
}
printPlayers();

scoreboard.addEventListener("click", (evt) => {
    if(evt.target.className === "inc" || evt.target.className === "dec") {
        changePlayerSore(evt.target.parentNode.id, evt.target.className);
    }
});

function changePlayerSore(changePlayer, incDec){
    let player = players.find(({playerName}) => playerName === changePlayer);
    if(incDec === "inc"){
        player.score++
    } else {
        player.score--
    }
    printPlayers();
};

saveBtn.addEventListener("click", () => {
    const newPlayer = {
        playerName: document.getElementById("addNewPlayerName").value,
        score: 0
    }
    players.push(newPlayer);

    let addNewPlayerName =  document.getElementById("addNewPlayerName");
    addNewPlayerName.value = "";
    printPlayers();
});