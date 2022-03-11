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
// - No exemplo será utilizado uma API que vai puxar uma lista de produtos


// //=> A função fetch retorna uma promise, ou seja uma promessa, um código que ainda está vindo
// fetch('https://jsonplaceholder.typicode.com/todos/1'
// // Na arrow function, se retornamos apenas 1 item, ñ precisamos de: ;{} return
// ).then(r => //---> R de response
// //==> O then basicamente vai executar algo, quando arequisição acontecer
// //=> É necessário transformar a resposta de acordo com oque veio do item, se for HTML -> json
// // se for um JSON -> json
// // - Para transformar tbm demora um pouvo pôs tamvém é assinc
//     r.json()
// ).then(jsonBody => {
// //=> Inserindo no #app o primeiro item da lista de produtos dentro do jsonBody, pós transformado
//     document.querySelector("#app").innerHTML = jsonBody[0].title
//     console.log(jsonBody) //==> Isso é o objt final, transformado, podendo fazer oque quiser
// }); 
// // Dizer oque fazer com a requisição

// const data = {
// }

// // Para escrever, precisamos primeiro declarar a url,
// // e dps um objt com opções -> Dentro dele o mthod: Post
// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
//     method: "POST",
//     headers: {
//         "Content-Type": "aplication/json"
//     },
//     body: JSON.stringify(data)
// })



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

