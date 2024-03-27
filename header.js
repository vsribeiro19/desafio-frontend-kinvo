
class Header extends HTMLElement {
    constructor() {
        super()
    }
}

customElements.define('app-header', Header)



// buscarArquivo = () => {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", "./src/componentes/card-transacao.html", true);
//     console.log(rawFile.open("GET", "./src/componentes/card-transacao.html", true));
//     rawFile.onreadystatechange = function () {
//         if (rawFile.readyState === 4) {
//             var allText = rawFile.responseText;
//             //   document.getElementById("textSection").innerHTML = allText;
//             console.log(allText);
//         }
//     }
// }

// // api: https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData

// const api = 'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData';

// obterDadosApi = () => {
//     buscarArquivo();
//     fetch(api).then((response) => {
//         response.json().then((data) => {
//             let retornoApi = data;
//             return retornoApi;
//         })
//     })
// }

// obterDadosApi()
// // obterValoresCabecalho = () => {
// //     const item = `<li class="valor__transacoes-item" id="valor__transacoes-item"><span></span></li>`;
// //     console.log(item);
// // }


// // obterValoresCabecalho();
