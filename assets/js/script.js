function typeWriter() {

    const word = 'Wilson-3';
    let cpt = 0;
    const container = document.getElementById("typeWriter");

    const intervalId = setInterval(function () {
        // Affichez le caractère actuel
        container.textContent += word[cpt];
        cpt++;

        // effacement
        if (cpt === word.length) {
            clearInterval(intervalId);

            // Démarrez l'effacement avec un nouvel intervalle
            const effacementId = setInterval(function () {
                cpt--;

                // Si tous les caractères ont été effacés, effacez l'intervalle
                if (cpt === 0) {
                    clearInterval(effacementId);
                    container.textContent = ""; // Effacez le contenu une fois de plus
                } else {
                    // Supprimez le dernier caractère de la balise main
                    container.textContent = word.substring(0, cpt);
                }
            }, 1000); // Timer milliseconde -- EFFACEMENT
        }

    }, 1000); // Timer milliseconde -- ECRITURE

}


typeWriter();
