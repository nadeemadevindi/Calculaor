var no1Sel,no2Sel;

function myfun(getId){

var x,y;

if(getId=='no1'){
    no1Sel=true;
    no2Sel=false;
}

else if(getId=='no2'){
    no2Sel=true;
    no1Sel=false;
}

if(no1Sel){
x=document.getElementById(getId).value;//metahan getId comma athule enn ba this.id kyn ek ek pass krm allagnn parameter ekak wdyt tynna oni
document.getElementById('no1').value+=x;
}

if(no2Sel){
    y=document.getElementById(getId).value;
    document.getElementById('no2').value+=y;
    }
}

function add(){
    var no1,no2,result;
    
    no1=document.getElementById('no1').value;
    no2=document.getElementById('no2').value;
    result=parseFloat(no1)+parseFloat(no2);

    document.getElementById('res').value=result;
}

function sub(){
    var no1,no2,result;
    
    no1=document.getElementById('no1').value;
    no2=document.getElementById('no2').value;
    result=parseFloat(no1)-parseFloat(no2);

    document.getElementById('res').value=result;
}

function multiply(){
    var no1,no2,result;
    
    no1=document.getElementById('no1').value;
    no2=document.getElementById('no2').value;
    result=parseFloat(no1)*parseFloat(no2);

    document.getElementById('res').value=result;
}

function division(){
    var no1,no2,result;
    
    no1=document.getElementById('no1').value;
    no2=document.getElementById('no2').value;
    result=parseFloat(no1)/parseFloat(no2);

    document.getElementById('res').value=result;
}

function clr(){
    document.getElementById('no1').value="";
    document.getElementById('no2').value="";
    document.getElementById('res').value="";

}


