let root = document.documentElement;
var currentTheme="";
getCurrentTheme();
setCurrentTheme();


function getCurrentTheme(){
    let theme=localStorage.getItem("Theme");
    if(theme==null)
    {
        theme='first';
        currentTheme=theme;
        localStorage.setItem("Theme",currentTheme);
    }
    else{
        currentTheme=localStorage.getItem("Theme");
    }
    console.log("Current Theme:"+currentTheme)
}
function setCurrentTheme(){
    if(currentTheme=='first')
    {
        root.style.setProperty('--main-bg',"#3a4764");
        root.style.setProperty('--keypad-bg',"#232c43");
        root.style.setProperty('--screen-bg',"#182034");
        root.style.setProperty('--text-color',"#ffffff");
        root.style.setProperty('--toggle-red',"#d03f2f");
        root.style.setProperty('--seleted-theme',"flex-start");
        root.style.setProperty('--keybg',"#eae3dc");
        root.style.setProperty('--keytextcolor',"#232c43");
        root.style.setProperty('--keybgshadow',"#b4a597");
        root.style.setProperty('--redkeybg',"#d03f2f");
        root.style.setProperty('--redkeybgshadow',"#93261a");
        root.style.setProperty('--redkeytext',"#ffffff");
        root.style.setProperty('--bluekeybg',"#637097");
        root.style.setProperty('--bluekeyshadow',"#404e72");
        root.style.setProperty('--bluekeytext',"#ffffff");
    }
    else if(currentTheme=='second'){
        root.style.setProperty('--main-bg',"#e6e6e6");
        root.style.setProperty('--keypad-bg',"#d1cccc");
        root.style.setProperty('--screen-bg',"#ededed");
        root.style.setProperty('--text-color',"#000000");
        root.style.setProperty('--toggle-red',"#d03f2f");
        root.style.setProperty('--seleted-theme',"center");
        root.style.setProperty('--keybg',"#e5e4e1");
        root.style.setProperty('--keytextcolor',"#000000");
        root.style.setProperty('--keybgshadow',"#a69d91");
        root.style.setProperty('--redkeybg',"#ca5502");
        root.style.setProperty('--redkeybgshadow',"#893901");
        root.style.setProperty('--bluekeybg',"#377f86");
        root.style.setProperty('--bluekeyshadow',"#1b5f65");
    }
    else if(currentTheme=='third'){
        root.style.setProperty('--main-bg',"#160628");
        root.style.setProperty('--keypad-bg',"#1d0934");
        root.style.setProperty('--screen-bg',"#1d0934");
        root.style.setProperty('--text-color',"#ffe53d");
        root.style.setProperty('--toggle-red',"#00e0d1");
        root.style.setProperty('--seleted-theme',"flex-end");
        root.style.setProperty('--keybg',"#341c4f");
        root.style.setProperty('--keytextcolor',"#ffe53d");
        root.style.setProperty('--keybgshadow',"#871c9c");
        root.style.setProperty('--redkeybg',"#00e0d1");
        root.style.setProperty('--redkeybgshadow',"#6cf9f2");
        root.style.setProperty('--bluekeybg',"#58077d");
        root.style.setProperty('--bluekeyshadow',"#bc15f4");
    }
    else{

    }
}
function changeThemeTo(no)
{
    if(no==1)
    {
        let theme=localStorage.getItem("Theme");
        theme='first';
        currentTheme=theme;
        localStorage.setItem("Theme",currentTheme);
    }
    else if(no==2)
    {
        let theme=localStorage.getItem("Theme");
        theme='second';
        currentTheme=theme;
        localStorage.setItem("Theme",currentTheme);
    }
    else if(no==3)
    {
        let theme=localStorage.getItem("Theme");
        theme='third';
        currentTheme=theme;
        localStorage.setItem("Theme",currentTheme);
    }
    else{
        let theme=localStorage.getItem("Theme");
        if(theme=='first')
        {
            theme='second';
        }
        else if(theme=='second')
        {
            theme='third';
        }
        else if(theme=='third')
        {
            theme='first';
        }
        currentTheme=theme;
        localStorage.setItem("Theme",currentTheme);
    }
    setCurrentTheme();
}