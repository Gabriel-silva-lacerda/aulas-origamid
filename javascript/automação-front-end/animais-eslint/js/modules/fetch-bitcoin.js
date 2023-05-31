export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btc = document.querySelector(".btc-preco");
      btc.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      alert(Error(erro));
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
