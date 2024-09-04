const url =  `https://dragonball-api.com/api/characters`;
const listaordenada = document.getElementById("dblista");

function convertPersonagemToLi(personagem){ 
    return`
            <li class="personagens">
                <img src="${personagem.image}" alt="${personagem.name}">
                <div class="nome">${personagem.name}</div>
                <div class="detail">          
                    <div class="raca"><h6>${personagem.race}</h6></div>
                    <div class="genero"><h6>${personagem.gender}</h6></div>
                    <div class="descricao">${personagem.description}</div>
                </div>
            </li>
                `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.items)
    .then((bdList) => listaordenada.innerHTML += bdList.map(convertPersonagemToLi).join(""))
    .catch((error)=> console.log("O erro é " + error));