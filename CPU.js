let input = Array.from(document.getElementsByClassName('btn'));
let output = document.getElementById('disp');

let ans = false;

function check1(str){
    if(str=="ERROR!")
        str="";
    return str;
}

input.map(btn =>{
    btn.addEventListener('click',(e)=>{

        let textArea = output.value;
        let box = e.target;
        let value = box.innerText;
        switch(value){
            case 'C':
                textArea = "";
            break;
            case '←':
                textArea = check1(textArea);
                textArea = textArea.slice(0,-1);
            break;
            case '=':
                if(textArea!="")
                    try{
                        textArea = check1(textArea);
                        textArea = eval(textArea);
                        ans=true;
                    }catch{
                        textArea = 'ERROR!';
                    }
            break;
            default:
                if(ans){
                    if(box.classList[1]=="num"){
                        textArea = "";
                    }
                    ans=false;
                }

                textArea = check1(textArea);
                textArea += value;
            break;
        }

        document.getElementById('disp').value = textArea;

    });
})