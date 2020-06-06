// This is a JavaScript file
$(document).on("click","#verificar", function(){
var a= parseFloat($("#v1").val());
var b= parseFloat($("#v2").val());
var c= parseFloat($("#v3").val());

if(a<(b+c) && b<(a+c) && c<(a+b)){
  if(a==b && b==c){
   $("#resposta").html("equilatero");
  }

  else if (a==b && b!=c || a==c && c!=b || b==c && c!=a){
    $("#resposta").html("isoceles");
  }

  else{
   $("#resposta").html("escaleno");
  }
}

else{
  navigator.notification.alert("Triângulo inválido",null,"Aviso","ok");
  navigator.vibrate(1000);
}

});


