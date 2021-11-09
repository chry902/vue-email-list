/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Confermate lettura e buon divertimento */

const app = new Vue({
    el: `#app`,
    data: {
        emailRandom: ``,
        emailRandom1: ``,
    },

    mounted() {
        axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(response => {
                console.log(response.data.response);
                this.emailRandom = response.data.response
                this.emailRandom1 = response.data.response

            }).catch(error => {
                console.log(error);
            })
    }




})
