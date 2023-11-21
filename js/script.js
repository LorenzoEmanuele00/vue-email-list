const{createApp} = Vue;

createApp({
    data() {
        return {
            mails: [],
            numberOfEmail: 10,
        }
    },
    created() {
        for (let i = 0; i < this.numberOfEmail; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp);
                    this.mails.push(resp.data.response);
                    
                });   
        }
        console.log(this.mails);
    },
}).mount("#app");