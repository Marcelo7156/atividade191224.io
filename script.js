function maiorMenor(){
    let num1, num2, maiorMenor;
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    if(num1 > num2){
        alert('O maior numero é ' + num1);
    }else if(num1 < num2){
        alert('O maior numero é ' + num2);
    }else {
        alert('Os numeros ' + num1 + ' e ' + num2 + ' são iguais!')
    }
}

function senha(){
    let senha = document.getElementById('senha').value;
    if(senha != 1234){
        alert('Senha incorreta');     
    }else{
        alert('Conectado, algum dia vai conseguir entrar em alguma pagina hehehe!');
    }
}

function calcular(){
    let macas = parseFloat(document.getElementById('macas').value);
    let total;
    if(macas < 12){
        total = macas * 0.30;
    }else{
        total = macas * 0.25;
    }

    if(macas < 3){
        alert('O total a pagar é de R$' + total + ' centavos.');
    }else{
        alert('O total a pagar é de R$' + total + ' reais.');
    }
   
}

function atividade1(){
    let div = document.getElementById('atividade1');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
    let botao = document.getElementById('ver1');
    botao.textContent = div.style.display === 'block' ? 'ESCONDER ATIVIDADE' : 'VER ATIVIDADE';

}

function atividade2(){
    let div = document.getElementById('atividade2');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
    let botao = document.getElementById('ver2');
    botao.textContent = div.style.display === 'none' ? 'VER ATIVIDADE' : 'ESCONDER ATIVIDADE';
}

function atividade3(){
    let div = document.getElementById('atividade3');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
    let botao = document.getElementById('ver3');
    botao.textContent = div.style.display === 'block' ? 'ESCONDER ATIVIDADE' : 'VER ATIVIDADE';
}