// This is a JavaScript file
$(document).on("click","#verificar", function(){
var a= parseFloat($("#v1").val());
var b= parseFloat($("#v2").val());
var c= parseFloat($("#v3").val());
var equilatero;
var isosceles;
var escaleno;

if(a<(b+c) && b<(a+c) && c<(a+b)){
  if(a==b && b==c){
   equilatero = ('<br><center><img src="https://cdn-0.sabermatematica.com.br/wp-content/uploads/2018/04/triangulo-equilatero.png" width="250px">');

   $("#resposta").html("<center><br> Esse é um triângulo equilátero." + equilatero);
  }

  else if (a==b && b!=c || a==c && c!=b || b==c && c!=a){
    isosceles = ('<br><center><img src="https://matematicabasica.net/wp-content/uploads/2019/02/triangulo-isosceles-2.png" width="250px">');

    $("#resposta").html("<center><br>Esse é um triângulo isósceles." + isosceles);
  }

  else{
    escaleno = ('<br><center><img src="https://matematicabasica.net/wp-content/uploads/2019/02/triangulo-escaleno.png" width="250px">');

   $("#resposta").html("<center><br>Esse é um triângulo escaleno." + escaleno);
  }
}

else{
  navigator.notification.alert("Triângulo inválido",null,"Aviso","ok");
  navigator.vibrate(1000);
}

});


