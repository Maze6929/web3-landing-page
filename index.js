document.getElementById('connectButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Demander l'autorisation de l'utilisateur pour accéder à son compte
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            document.getElementById('account').innerText = `Adresse connectée: ${accounts[0]}`;
        } catch (error) {
            console.error("Erreur lors de la connexion à MetaMask", error);
        }
    } else {
        alert("MetaMask n'est pas installé. Veuillez l'installer pour utiliser cette fonctionnalité.");
    }
});
