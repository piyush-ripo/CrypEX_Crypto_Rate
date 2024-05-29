async function fetchCryptoPrices() {
    const apiKey = '19DF50C4-DD39-4C0E-8805-CDC0D83383BD';
    const assets = ['BTC','BNB','ETH','SOL'];
    const cur=prompt("Enter currency USD/INR");
    const baseCurrency = cur;
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
let temp ;
    try {
        for (const asset of assets) {
            const url = `https://rest.coinapi.io/v1/exchangerate/${asset}/${baseCurrency}?apikey=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.rate) {

                temp =data.rate.toFixed(2);
                console.log(temp);
            } else {
                console.log(`Price of ${asset}: Not available`);
            }
            if (cur=="USD" || cur=="usd" || cur=="Usd"){
            document.getElementById(asset).innerHTML = `$${temp}`;
            temp =0;}
            else{
                document.getElementById(asset).innerHTML = `₹${temp}`;
            temp =0;
            }
            await delay(1);
        }
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchCryptoPrices();
