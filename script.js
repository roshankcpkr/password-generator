function generator(){
    let length = document.querySelector('.select-range').value;
    let charlist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!/?*&^%$#@+-';
    var charlen = charlist.length;
    if (length > 8 && length <=30){
        let result1="";
        let result2="";
        let result3="";
        let result4="";
        for (let i=0; i<=length; i++){
            result1 = result1 + charlist.charAt(Math.floor(Math.random()*charlen));
        }
        for (let i=0; i<=length; i++){
            result2 = result2 + charlist.charAt(Math.floor(Math.random()*charlen));
        }
        for (let i=0; i<=length; i++){
            result3 = result3 + charlist.charAt(Math.floor(Math.random()*charlen));
        }
        for (let i=0; i<=length; i++){
            result4 = result4 + charlist.charAt(Math.floor(Math.random()*charlen));
        }
        document.getElementById('p-1').value = result1;
        document.getElementById('p-2').value = result2;
        document.getElementById('p-3').value= result3;
        document.getElementById('p-4').value = result4;
        document.querySelector('.info').textContent = "Password generated successfully";
    }
    else{
        document.querySelector('.info').textContent = "Your password range must be greater than 8 and upto 30";

    }
   

}
function copypass1(){
        var copied = document.getElementById('p-1');
        copied.select();
        copied.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copied.value);
}
function copypass2(){
    var copied = document.getElementById('p-2');
    copied.select();
    copied.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copied.value);

}
function copypass3(){
    var copied = document.getElementById('p-3');
    copied.select();
    copied.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copied.value);

}
function copypass4(){
    var copied = document.getElementById('p-4');
    copied.select();
    copied.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copied.value);

}