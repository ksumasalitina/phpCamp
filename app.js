
const App={


    data(){
        return{
            color: "",
            phone: "",
            username: "",
            country_codes: [
                {text: "+380", value: "ukraine"},
                {text: "+1", value: "usa"},
                {text: "+353", value: "ireland"},
                {text: "+86", value: "china"},
                {text:"+33", value: "france"},
            ]
        }
    },
    methods:{
        checkForm(){
            let reg_phone = /^[0-9]{9,9}$/
            let reg_user = /[A-Z]/
            let reg_user1 = /(_)/
            let reg_user2 = /[0-9]{3}$/
            if(this.color==""){
                document.getElementById('error_state').textContent="Choose the gender"
            }
            else{
                document.getElementById('error_state').textContent=""
            }
            if(!reg_phone.test(this.phone)){
                document.getElementById('error_phone').textContent="Phone invalid"
            }
            else{
                document.getElementById('error_phone').textContent=""
            }
            if(!(reg_user.test(this.username)&&reg_user1.test(this.username)&&reg_user2.test(this.username))){
                document.getElementById('error_user').textContent="Invalid username"
            }
            else{
                document.getElementById('error_user').textContent=""
            }
        }
    }
}
Vue.createApp(App).mount('#app')