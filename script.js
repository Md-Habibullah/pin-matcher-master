// Genarate btn handle

let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateBtnHandler)

function generateBtnHandler() {
    let GenerateNum = Math.round(Math.random() * 10000)
    document.getElementById('code-display').value = GenerateNum;
}

// Submit area

let string = ""
let btns = document.getElementsByClassName('button');
let btnsAll = Array.from(btns);
for (let i = 0; i < btnsAll.length; i++) {
    btnsAll[i].addEventListener('click', function(e){
        if(e.target.innerText == 'C'){
            string = "";
            document.getElementById('output').value = string;
        }
        else if(e.target.innerText == '<'){
            string = string.slice(0, -1)
            document.getElementById('output').value = string;
        }
        else {
            string = string + e.target.innerText;
            document.getElementById('output').value = string;
        }
        
    })
    
}

document.getElementById('submit-btn').addEventListener('click', function(){
    let codeDisplay = document.getElementById('code-display').value
    let codeDisplayNum = parseFloat(codeDisplay)
    let output = document.getElementById('output').value
    let outputNum = parseFloat(output)


    if (codeDisplayNum === outputNum) {
        let notifyRight = document.getElementById('notify-right')
        notifyRight.style.display = "block";

        let notifyWrong = document.getElementById('notify-wrong')
        notifyWrong.style.display = "none";

        document.getElementById('output').value = ""
        document.getElementById('code-display').value = ""

        document.getElementById('action-left').style.display = 'none'
    }
    else{
        let notifyRight = document.getElementById('notify-right')
        notifyRight.style.display = "none";


        let notifyWrong = document.getElementById('notify-wrong')
        notifyWrong.style.display = "block";

        document.getElementById('output').value = ""
        document.getElementById('code-display').value = ""


        let action = document.getElementById('num').innerText
        let doAction = parseInt(action)

        if (doAction>0){
            action2 = doAction - 1
            document.getElementById('num').innerText = action2
        }
        if (doAction == 1){
            n = document.getElementById('submit-btn')
            n.style.background = 'gray'
        }

        x = document.getElementById('action-left')
        x.style.display = 'block'
        
       
    }
})