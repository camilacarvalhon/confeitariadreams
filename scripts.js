window.onload=function()
{
 document.getElementById('instituicao').addEventListener('change', function () {
     var style = this.value == 'novoCartao' ? 'block' : 'none';
     document.getElementById('hidden_div').style.display = style;
 });
 } 
 function testadorCPF()
 {
         var cpf = document.getElementById("cpf").value;
         console.log(cpf)

             var pos0 = cpf.charAt(0);  
             var pos1 = cpf.charAt(1);
             var pos2 = cpf.charAt(2);
             var pos3 = cpf.charAt(3);  
             var pos4 = cpf.charAt(4);
             var pos5 = cpf.charAt(5);
             var pos6 = cpf.charAt(6);  
             var pos7 = cpf.charAt(7);
             var pos8 = cpf.charAt(8);
             var pos9 = cpf.charAt(9);
             var pos10 = cpf.charAt(10);

     var soma = (parseInt(pos0) * 10) + (parseInt(pos1) * 9) + (parseInt(pos2) * 8) + (parseInt(pos3) * 7) + (parseInt(pos4) * 6) + (parseInt(pos5) * 5) + (parseInt(pos6) * 4) + (parseInt(pos7) * 3) + (parseInt(pos8) * 2);
     var resto = (soma * 10) % 11;

     if((resto == 10) || (resto == 11))
     {
         resto = 0;
     }

     if(resto == pos9)
     {
         
         var soma1 = (parseInt(pos0) * 11) + (parseInt(pos1) * 10) + (parseInt(pos2) * 9) + (parseInt(pos3) * 8) + (parseInt(pos4) * 7) + (parseInt(pos5) * 6) + (parseInt(pos6) * 5) + (parseInt(pos7) * 4) + (parseInt(pos8) * 3);
         var resto1 = (soma1 * 10) % 11;

         if((resto1 == 10) || (resto1 == 11))
         {
             resto1 = 0
         }

         if(resto == pos9 && resto1 == pos10)
         {
             console.log("O CPF é verdadeiro");
         }

         else
         {
             window.alert("Digite um CPF válido");
             console.log("O CPF é falso");
         }
         
     }

     else
     {
         window.alert("Digite um CPF válido");
         console.log("O CPF é falso");
     }
 
 }