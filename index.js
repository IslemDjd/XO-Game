var isX = 0;
var cptX = 0;
var cptO = 0;
var isPressed = [9];
var arr = [9];
var isTheWinner = 0;

for(let i = 0 ; i < 9 ; i++){
    arr[i] = null;
    isPressed[i] = 0;
}

function setToken(nb){
    while(isPressed[nb-1] == 0 && isTheWinner == 0){
        if(isX == 0){
            var btn = document.getElementById("n"+nb);
            btn.innerHTML = "X";
            arr[nb-1] = "X";
            isPressed[nb-1] = "1";
            isX = 1;
            cptX += 1;
            document.getElementById("screen").innerHTML = "O Turn";
            document.getElementById("twoP").innerHTML = "";
            document.getElementById("twoP").style.height = "0";
        }
        else{
            var btn = document.getElementById("n"+nb);
            btn.innerHTML = "O";
            arr[nb-1] = "O"
            isPressed[nb-1] = "1";
            isX = 0;
            cptO += 1;
            document.getElementById("screen").innerHTML = "X Turn";
        }
        whoWin();
    }
}

function whoWin(){
    if(isTheWinner == 0){
        if(cptX >= 3 || cptO >= 3){
            if(arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X' || arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X' || arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X'){
                document.getElementById("screen").innerHTML = "X Is The Winner";
                isTheWinner = 1;
                nextGame();
            }
            else{
                if((arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') || (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') || (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O')){
                    document.getElementById("screen").innerHTML = "O Is The Winner";
                    isTheWinner = 1;
                    nextGame();
                }
                else{
                    if(arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X' || arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' || arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X'){
                        document.getElementById("screen").innerHTML = "X Is The Winner";
                        isTheWinner = 1;
                        nextGame();
                        
                    }
                    else{
                        if(arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O' || arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' || arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O'){
                            document.getElementById("screen").innerHTML = "O Is The Winner";
                            isTheWinner = 1;
                            nextGame();
                        }
                        else{
                            if(arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X' || arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X'){
                                document.getElementById("screen").innerHTML = "X Is The Winner";
                                isTheWinner = 1;
                                nextGame();
                            }
                            else{
                                if(arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O' || arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O'){
                                    document.getElementById("screen").innerHTML = "O Is The Winner";
                                    isTheWinner = 1;
                                    nextGame();
                                    
                                }
                            }
                        }

                    }

                }

            }
        }
    }
    if(cptX == 5 && cptO == 4 && isTheWinner == 0){
        document.getElementById("screen").innerHTML = "Draw, Play Again";
        nextGame();
    }
    

}

function nextGame(){
    document.getElementById("twoP").style.height = "50px";
    document.getElementById("twoP").style.fontSize = "20px";
    document.getElementById("twoP").style.color = "hsl(76, 100%, 72%)";
    document.getElementById("twoP").innerHTML = "The Next Game Will Begin in ";
    setTimeout(function(){
        document.getElementById("twoP").innerHTML = "The Next Game Will Begin in 3";
    }, 0);

    setTimeout(function(){
        document.getElementById("twoP").innerHTML = "The Next Game Will Begin in 2";
    }, 1000);

    setTimeout(function(){
        document.getElementById("twoP").innerHTML = "The Next Game Will Begin in 1";
    }, 2000);

    setTimeout(function(){
        document.location.reload();
    }, 3000);

}


