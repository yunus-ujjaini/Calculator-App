let numb1=0;
let numb2=0;
let op='N';
let ans;
function type(number)
{
    var myscreen=document.getElementById('screen');
    if(myscreen.innerHTML==ans)
    {
        myscreen.innerHTML=number;
    }
    else{
        if(number!='.'){
            // console.log("here");
            if(myscreen.innerHTML=='0'){
                
                myscreen.innerHTML= number;
                numbers=number;
            }
            else{
                
                myscreen.innerHTML+=number;
            }
        }
        else{
            if(myscreen.innerHTML=='0'){
                myscreen.innerHTML= "0.";
                
            }
            else{
                let value=myscreen.innerHTML;
                if(value.includes(".")==false)
                {
                    myscreen.innerHTML+=`${number}`;
                }
                
            }
        }
    }
   
}
function del(){
    var myscreen=document.getElementById('screen');
    let value=myscreen.innerHTML;
    if(value  && value!='0.')
    {
        value=value.slice(0,value.length-1);
        if(value=='')
        {
            value=0;
        }
        myscreen.innerHTML= value;
    }
    else if(value=='0.')
    {
        myscreen.innerHTML= "0";
        numbers=0;
    }
}
function perform(opn){
    var myscreen=document.getElementById('screen');
    
    if(op=='N')
    {
        op=opn;
        numb1=myscreen.innerHTML;
        myscreen.innerHTML='0';
        // console.log("New OP:"+op);
    }
    else{
        numb2=myscreen.innerHTML;
        if(op=='+')
        {
            ans=Number.parseFloat(numb1)+Number.parseFloat(numb2);
            
            op=opn;
        }
        else if(op=='-')
        {
            ans=Number.parseFloat(numb1)-Number.parseFloat(numb2);
            op=opn;
        }
        else if(op=='x')
        {
            ans=Number.parseFloat(numb1)*Number.parseFloat(numb2);
            op=opn;
        }
        else if(op=='/')
        {
            ans=Number.parseFloat(numb1)/Number.parseFloat(numb2);
            op=opn;
        }
        numb1=ans;
        myscreen.innerHTML=ans;
    }
}

function showans(){
    var myscreen=document.getElementById('screen');
    numb2=myscreen.innerHTML;
    if(op=='+')
    {
        ans=Number.parseFloat(numb1)+Number.parseFloat(numb2);
       
    }
    else if(op=='-')
    {
        ans=Number.parseFloat(numb1)-Number.parseFloat(numb2);
    }
    else if(op=='x')
    {
        ans=Number.parseFloat(numb1)*Number.parseFloat(numb2);
        
    }
    else if(op=='/')
    {
        ans=Number.parseFloat(numb1)/Number.parseFloat(numb2);
        
    }
   
    myscreen.innerHTML=ans;
}
function reset(){
    var myscreen=document.getElementById('screen');
    numb1=0;
    numb2=0;
    op='N';
    ans=0;
    myscreen.innerHTML="0";
}