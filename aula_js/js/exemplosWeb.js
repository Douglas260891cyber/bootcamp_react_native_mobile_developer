function clicou() {
    //Resposta do onclick da linha 11...  
    alert('Obrigado por clicar!');
}
function redirecionar() {
    //Aponta para o endereço informado...
    window.open("https://www.iconplc.com/services/laboratories/global-central-laboratories/");
}
function passeOMouse() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse e mudar a frase!!!";
}
function passeOMouse2(element) {
    element.innerHTML = "Obrigado por passar o Mouse e mudar a frase!!!";
}
function voltar(element) {
    element.innerHTML = "Passe o mouse aqui";
}
function funcaoChange(element) {
    console.log(element.value); //O value pega o valor da escolha... 
}
