// export default class UserRequest {

//     static baseApi = "https://blog-m2.herokuapp.com/users"
//     static headers = {
//         "Content-Type": "application/json",
//     }
//     static btnCadastrar = document.querySelector(".btn-cadastrar")

//     static getProfile(){
//         const userName = document.querySelector(".nameUser")
//         const emailCadastro = document.querySelector(".email-cadastro")
//         const avatarImg = document.querySelector(".img-cadastro")
//         const senhaCadastro = document.querySelector(".senha-cadastro")

//         const newUser =  {
          
//            " username": userName.value  ,
//             "email": emailCadastro.value,
//             "avatarUrl": avatarImg.value ,
//             "password": senhaCadastro.value
//         }
//         const usuarioCadastrado = JSON.stringify(newUser)
//         return usuarioCadastrado
//     }
    
//     static async createrUser(){
//         const newUser = this.getProfile()

//         return await fetch("https://blog-m2.herokuapp.com/users/register" , {
//             method: "POST",
//             headers:this.headers ,
//             body: newUser
//         })
//         .then(res=> res.json())
//         .catch(err => console.log(err))
    
//     }
//     static async getUserId(id){
//         const token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))
//         return await fetch(`${this.baseApi}/${id}`, {
//             method: "GET",
//             headers: this.headers
//         })
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => console.log(err))
//     }
// }

// UserRequest.btnCadastrar.addEventListener("click", (event)=>{
//     event.preventDefault()

//    UserRequest.createrUser()

// })
export default class Cadastro {
        static btnCadastrar = document.querySelector(".btn-cadastrar")

    static getDados() {
        const userName = document.querySelector(".nameUser")
        const emailCadastro = document.querySelector(".email-cadastro")
        const avatarImg = document.querySelector(".img-cadastro")
        const senhaCadastro = document.querySelector(".senha-cadastro")
        const dados = {
            "username": userName.value,
            "email": emailCadastro.value,
            "avatarUrl": avatarImg.value,
            "password": senhaCadastro.value
        }
        const dadosJSON = JSON.stringify(dados)
        return dadosJSON
    }
    static async createUser() {
        //console.log(this.getDados())
        const dados = this.getDados()
        const dadosLogin = await fetch("https://blog-m2.herokuapp.com/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dados
            })
            .then(res => res.json())
            .catch(err => console.log(err))
            if(dadosLogin.message !== undefined){
                alert("Usuário invalido ou ja cadastrado!")
                
        }else{
            window.location.href = "../index.html"
            
        }
        return dadosLogin
    }
}
/* Cadastro.btn.addEventListener("click", (event) => {
    event.preventDefault
    Cadastro.cadastar()
}) */
Cadastro.btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault()
    Cadastro.createUser()
})
// const btnCloseCadastrar = document.querySelector(".btn-close-cadastro")

// btnCloseCadastrar.addEventListener("click",()=>{
//     console.log("oi")
//     window.location.href = "../../index.html"
// })