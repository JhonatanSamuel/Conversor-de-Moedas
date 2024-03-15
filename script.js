const button = document.getElementById("convert-button") // document é quando chama alguém do html. getElementsByTagName- quando chama o nome de uma tag
const select = document.getElementById("currency-select")  //fez uma function e pegou do html informações com o getElementsByTagName



const convertValues = async () => {    // function para colocar no addEventListener
  const inputreais = document.getElementById("input-real").value //para que não viesse todas as informações q está no input, só chamei o que eu queria que é o value (valor)
  const realValue = document.getElementById("real-value") // real-value é o texto onde está escrito R$10000 no html. quando for colocado o valor no input, esse valor vai aparecer no texto na hora.
  const currencyValue = document.getElementById("value-name") //para o valor em dolar

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL,GBP-BRL,MXN-BRL").then(response => response.json())

  const bitcoin = data.BTCBRL.high
  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const iene = data.JPYBRL.high
  const libra = data.GBPBRL.high
  const peso = data.MXNBRL.high

  realValue.innerHTML = new Intl.NumberFormat("pt-br", {   //colocou em pt-br
    style: "currency",                             //egou o valor que será colocado no input e o nome do input, assim o valor que for colocado no input sera colocado no texto de REAIS
    currency: "BRL",                              //TROCOU O NOME DA MOEDA PARA BRL BRASIL
  }).format(inputreais)                              // FORMATA O VALOR, COLOCANDO R$ NA FRENTE DOS NUMEROS

if(select.value === '₿ Bitcoin'){                       // Para formatar e converter o valor para euro
  currencyValue.innerHTML = new Intl.NumberFormat("XBT", {
   style: "currency",
     currency: "BTC",
  }).format(inputreais / bitcoin)
  }
  
if(select.value === 'U$ Dólar americano'){             // Para formatar e converter o valor para dolar
  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputreais / dolar)                       // dessa forma ja passa formatando, colocando o $ e $
}


if(select.value === '€ Euro'){                        // Para formatar e converter o valor para euro
  currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputreais / euro)
  }


if(select.value === '¥ Iene'){                         // Para formatar e converter o valor para euro
  currencyValue.innerHTML = new Intl.NumberFormat("ja-JA", {
    style: "currency",
    currency: "JPY",
  }).format(inputreais / iene)
  }   

if(select.value === '£ Libra'){    // Para formatar e converter o valor para euro
  currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(inputreais / libra)
  }

if(select.value === '$ Peso mexicano'){    // Para formatar e converter o valor para euro
  currencyValue.innerHTML = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    }).format(inputreais / peso)
    }  

}

changeCurrency = () => {   // function criada para mudar de dolar para euro
  const currencyName = document.getElementById("real-name")
  const currencyImg = document.getElementById("currency-img")
  
  if(select.value === '₿ Bitcoin') {  //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Bitcoin" //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/bitcoin.png" // trocar a imagem de dolar para euro//
  }

  if(select.value === 'U$ Dólar americano' ) {    //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Dólar americano"    //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/eua.png"           // trocar a imagem de dolar para euro//
  }

  if(select.value === '€ Euro') {  //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Euro" //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/euro.png" // trocar a imagem de dolar para euro//
  }


  if(select.value === '¥ Iene') {  //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Iene" //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/japao.png" // trocar a imagem de dolar para euro//
  }

  if(select.value === '£ Libra') {  //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Libra" //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/reino-unido.png" // trocar a imagem de dolar para euro//
  }

  if(select.value === '$ Peso mexicano') {  //para trocar a informação o texto quando mudar.//
    currencyName.innerHTML = "Peso" //quando for converter para dolar, deixar dolar americano, quando for euro, deixar euro//
    currencyImg.src = "./assets/mexico (1).png" // trocar a imagem de dolar para euro//
  }

 

  convertValues()         // toda vez que tiver uma troca de valores, quando mudar do euro para dolar, essa função vai trocar automaticamente o valor, junto com o texto, sem ter que precisar clicar para converter;

}

button.addEventListener("click", convertValues) // toda vez que o botão for clicado, vai acionar o evento click
select.addEventListener("change", changeCurrency) // toda vez que for clicado, vai chamar o evento de change do dolar para euro