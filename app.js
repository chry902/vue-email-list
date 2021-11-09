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
        emailRandom =[
            `email1`,
            `email2`,
            `email3`,
            `email4`,
            `email5`,
            `email6`,
            `email7`,
            `email8`,
            `email9`,
            `email10`


        ],

    },

    mounted() {
        axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(response => {
                console.log(response.data.response);
                response.data.response.


            }).catch(error => {
                    console.log(error);
                })
    }




})
