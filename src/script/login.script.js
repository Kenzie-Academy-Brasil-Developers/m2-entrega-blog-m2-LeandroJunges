export default class LoginRequest {

    static base_api = "https://blog-m2.herokuapp.com/users/login" 
    static btnLogin = document.querySelector(".btn-login");
        
   
    static getDados(){
       
            const inputEmailLogin = document.querySelector(".email-login")
            const inputSenha = document.querySelector(".senha-login")
            const dados = {
                email: inputEmailLogin.value, 
                password: inputSenha.value
            }
            const dadosJson = JSON.stringify(dados)
            console.log(dadosJson)
            return dadosJson
           
    }

    static async login(){
        const dadosRecolhidos = this.getDados()
      
        const verificationLogin = await fetch(this.base_api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: dadosRecolhidos
            
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            localStorage.setItem("@kenzie-blog:user", JSON.stringify(res.userId))
            localStorage.setItem("@kenzie-blog:token", JSON.stringify(res.token))
            return res
        })
        .catch(err => console.log(err))
        if(verificationLogin.message !== undefined){
            console.log("E-mail ou senha invalido")

        }else{
            window.location.href = "./pages/dashBoard.html"
        }
        
    }


    
}
LoginRequest.btnLogin.addEventListener("click", (event)=>{
    event.preventDefault()
    LoginRequest.login()
   
})