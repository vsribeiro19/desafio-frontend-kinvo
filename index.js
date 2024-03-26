// api: https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData

const api = 'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData';

obterDadosApi = () => {
    fetch(api).then((response) => {
        response.json().then((data) => {
            let retornoApi = data;
            return retornoApi;
        })
    })
}
obterValoresCabecalho = () =>{
    const item = `<li class="valor__transacoes-item" id="valor__transacoes-item"><span></span></li>`;
    console.log(item);
}


obterValoresCabecalho();
