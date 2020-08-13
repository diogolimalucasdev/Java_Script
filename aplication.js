import api from './api';

class App{
  constructor(){
    this.repositories = [];
    this.formEL = document.getElementById('repo-form');
    this.inputEL =document.querySelector('input[name=repository]');
    this.listEL = document.getElementById('repo-list');
    this.registerHandlers();
  }
  registerHandlers(){
    this.formEL.onsubmit = event => this.addRepository(event);
  }
  async addRepository(event){
   event.preventDefault();
    const repoIput =this.inputEL.nodeValue;
    if(repoInput.length ===0)
    return;

    const reponse = await api.get(`/repos/${repoInput}`);
    console.log(Response);
   
    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'tire sua ideia do papel e estude cada vez maiis',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      hrml_url: 'http://github.com/rocketseat/rocketseat.com.br',
    });
      this.render();
  }
  render(){
    this.listEL.innerHTML = ''; //fazendo ele apagar tudoo da lista
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);
      
      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name)); 
      
      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));
      
      let linkEl = document.createElement('a');
      linkEl.setAttribute('taret', '_blank');
      linkEl.appendChild(document.createTextNode('acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEL.appendChild(listItemEl);
    });
  }
}
new App();
