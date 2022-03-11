// Descrição:

// O fecth é uma forma de enviar 
// requisições assíncronas para o
// servidor. Isto é, o código vai
// ficar rodando e mesmo que o servidor
// esteja lento, ele nãi irá travar
// o restante do code de JS, vai rodar no 
// tempo normal, puxar o necessário, 
// deixando o code, rodar normalmente


// Caracteríscas do fecth:

// - Precisa de dois parâmetros, a url de onde virão os dados e o method
// - url é com quem o nosso código vai se comunicar
// - O método pardrão é GET



// Exemplo:
// - No exemplo será utilizado uma API que vai puxar uma lista aleatória

function fetchApiData() {

    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#fill_list');
        
        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id', item.id);
            li.innerHTML = item.title;
            list.appendChild(li);
        })
    })
}

