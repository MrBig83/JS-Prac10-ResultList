const main = document.querySelector("main");
let users = [{
    userName: "test",
    score: 0

}];
let newUser;


const inputBox = document.createElement("input");
const inputBtn = document.createElement("button");
const playerList = document.createElement("p");

inputBox.placeholder = "Username"
inputBtn.classList = "inputBtn"


inputBtn.innerText = "Add user"


main.appendChild(inputBox);
main.appendChild(inputBtn);

main.appendChild(playerList);


inputBtn.addEventListener("click", saveNewUser)


function saveNewUser(){
    newUser = inputBox.value;

    console.log(newUser);
    console.log(users);

    inputBox.value = "";

    users.push(
        {userName:newUser, 
        score:0
    });
            
    
    renderList(users);
}


function renderList(users){
    
    for(let user of users){
        console.log(user.userName)
        playerList = user.userName
        main.appendChild(playerList)
    }
    
        
    /*
    for(let i=0; i < users.length; i++ ){
        playerList.innerText = users[i].userName;
        console.log(users)
        console.log(users[i].userName)
        main.appendChild(playerList)    

    }
    */
}

//playerList.innerText="sdlfsdafkj"