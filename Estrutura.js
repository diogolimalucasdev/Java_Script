var listelement = document.querySelector('#app ul');
//buscando dentro da div comid app toda a lista (ul)
var input = document.querySelector('#app input');
//buscandodentroda div com id appo input
var button = document.querySelector('#app button');
//mesma coisa

var todos = JSON.parse(localStorage.getItem('list_todos'))|| [];
//faço isso pois como transformei em uma string(json) quando ele for passar pelofor
//ele daria um erro entaoeu faço uma condição ou e assimnao apresento um erro
  

 
function rendertodos() {
    listelement.innerHTML = '';
    //to colocando todos elementos que estiver dentro da lista ja fique como vazio
    //assim quando eu adiconar um novo elemento so vai adicionar ele 
    for (todo of todos){ 
         //criei um for onde ele vai pecorrer todos elementos do 
         //array todos e armaenar na variavel todo
        var todoelemento = document.createElement('li');
         //cada item
        var todoText = document.createTextNode(todo);
        var linkelement = document.createElement('a');
        //crio um link
        
        linkelement.setAttribute('href', '#');
         //criando um nome para adcionar no link element
        
        var pos = todos.indexOf(todo);
        linkelement.setAttribute('onclick', 'deletodo('+ pos +')');

        var linktext = document.createTextNode('Excluir');
        //adiconando o texto
        
        
        
        
         linkelement.appendChild(linktext);
         //vinculo o texto com o link
         

        
        todoelemento.appendChild(todoText);
       //to adicionando todo o array dentro da variavel todo elemento
       todoelemento.appendChild(linkelement);
        
       listelement.appendChild(todoelemento);
        //adciono todos elemento a minha lista
        
        
    }
}

rendertodos();
function adcionartodos(){
    var todotext = input.value;
    //consigo ter o valor do meu input
    todos.push(todotext);
    //estou adcionando ao meu array todos tudo o que for lido e armazenado na variavel ler
    input.value = '';
    rendertodos();
    save();
}
button.onclick = adcionartodos;
//para afunçãofuncionar quando o botão for clicado
 
 function deletodo(pos){
     todos.splice(pos , 1 );
     //função splide remove o intem (Pos) e o 1 é que eu so quero remover um intem
     rendertodos();
     save();

 }
 function save(){

     localStorage.setItem('list_todos', JSON.stringify(todos));
     //to adiconando minha lista a local storage
 }