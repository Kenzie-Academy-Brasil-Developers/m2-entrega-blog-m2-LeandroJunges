// export default class PostRequest {


//     static basePost = "https://blog-m2.herokuapp.com/posts?page=";
//     static token = JSON.parse(localStorage.getItem('@kenzie-blog:token'))
//     static headers = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${this.token}`
//     }

//     static async viewPosts(pagNumber){
//         return await fetch(`${this.basePost}${pagNumber}`, {
//             method: "GET",
//             headers: this.headers
//         })
//         .then(res => res.json())
//         .catch(err => console.log(err))

//     }
//     static async getPostId(id){
//         const urlApi = "https://blog-m2.herokuapp.com/posts/"
//         return await fetch(`${urlApi}${id}`, {
//             method: "GET",
//             headers: this.headers
//         })
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => console.log(err))
//     }
//     static createPost(){
//         const postIncrivel = document.querySelector(".postIncrivel")
//         const content = {
//             content : postIncrivel.value
//         }
//         const contentJson = JSON.stringify(content) 
//         return contentJson
//     }
//     static async newPost(){

//         const incrivelPost = this.createPost()

//         const api = "https://blog-m2.herokuapp.com/posts/"

//         return await fetch(`${api}`, {
//             method: "POST",
//             headers: this.headers,
//             body: incrivelPost
//         })
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => console.log(err))
//     }
//     static async updatePost(id, contentUpdate){
//         const base_url = "https://blog-m2.herokuapp.com/posts"

//         return await fetch(`${base_url}/${id}`, {
//             method: "PATCH",
//             headers: this.headers,
//             body: JSON.stringify(contentUpdate)
//         })
//         .then(res => res.json())
//         .catch(err => console.log(err))

//     }
//     static async deletePost(id){
//         const base_url = "https://blog-m2.herokuapp.com/posts"

//         return await fetch(`${base_url}/${id}`, {
//             method: "DELETE",
//             headers: this.headers
//         })
//         .then(res => res.json())
//         .catch(err => console.log(err))
//     }
//     static async montarPost(){
//         const posts = await this.viewPosts()
//         const listposts = posts.data 
//         const ulPost = document.querySelector(".container-posts")
//         console.log(listposts)
//         listposts.forEach(element => {
            
//             const itemPost = document.createElement("li");
//         itemPost.classList.add("item-post")

//         const containerImgPost = document.createElement("div")
//         containerImgPost.classList.add("container-post-img")

//         const figureContainerPost = document.createElement("figure")
//         figureContainerPost.classList.add("container-img-post")

//         const imgPost = document.createElement("img")
//         imgPost.src= element.user.avatarUrl
        
//         const containerContent = document.createElement("div");
//         containerContent.classList.add("container-content")
        
//         const titleContent = document.createElement("h2")
//         titleContent.innerText = element.user.username
//         const pContent = document.createElement("p")
//         pContent.innerText = element.content
        
//         const containerLinks = document.createElement("div")
//         containerLinks.classList.add("container-links")
//         const linkEditar = document.createElement("h4")
//         linkEditar.innerText = "Editar"
//         linkEditar.id="edit"
//         const linkApagar = document.createElement("h4")
//         linkApagar = "Apagar"
//         linkApagar.id = "erase"
//         const datePost = document.createElement("p");
//         datePost.innerText= element.createdAt
        
//         containerLinks.append(linkEditar, linkApagar, datePost)
//         containerContent.append(titleContent, pContent)
//         containerImgPost.append(figureContainerPost, imgPost)
//         itemPost.append(containerImgPost, containerContent, containerLinks)
//         ulPost.append(itemPost)
//     });
//     }

// }

 export default class Post {
    static btnAdicionar = document.querySelector(".add")
    static base_url = 'https://blog-m2.herokuapp.com'
    static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))

    static async infosUsuario() {
        const id = localStorage.getItem("@kenzie-user")
        const dados = await fetch(`https://blog-m2.herokuapp.com/users/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => console.log(err))
        return dados
    }
    static async renderizaPerfil() {
        const dados = await this.infosUsuario()

        const imgPerfil = document.querySelector("#imgPerfil")
        imgPerfil.src = dados.avatarUrl
        const nomePerfil = document.querySelector("#nomePerfil")
        nomePerfil.innerText = dados.username
        console.log(dados)
    }
    static criarPost() {
        const texto = document.querySelector("#novoPost").value
        const postagem = {
            content: texto
        }
        return JSON.stringify(postagem)
    }
    static async adicionarPost() {
        console.log("teste")
        const postagem = this.criarPost()
        return  await fetch(this.base_url + "/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                body: postagem
            })
            .then((res) => res.json())
            .catch(err => console.log(err))
    }
    static async pegarPost(id) {
        const postagens = await fetch(this.base_url + "/posts?page=" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            })
            .then((res) => res.json())
            .catch(err => console.log(err))
        return postagens
    }
    static async renderizaPost() {
        const postagens = await this.pegarPost()
        const listagemPost = postagens.data
        
        listagemPost.forEach((element) => {
            const listaPost = document.querySelector(".container-posts")
            const divPost = document.createElement("li")
            divPost.classList.add("item-post")

            const divImgPost = document.createElement("div")
            divImgPost.classList.add("container-post-img")
            const figurePost = document.createElement("figure")
            figurePost.classList.add("container-img-post")
            const imgPost = document.createElement("img")
            imgPost.src = element.user.avatarUrl

            divImgPost.append(figurePost, imgPost )


            const divTextPost = document.createElement("div")
            divTextPost.classList.add("container-content")
            const nomePerfil = document.createElement("h2")
            nomePerfil.innerText = element.user.username
            const textoPost = document.createElement("p")
            textoPost.innerText = element.content
            
            
            const divBtn = document.createElement("div")
            divBtn.classList.add("container-links")
            const btnEditar = document.createElement("h4")
            btnEditar.innerText = "Editar"
            btnEditar.id="edit"
            const btnApagar = document.createElement("h4")
            btnApagar.innerText = "Apagar"
            btnApagar.id="erase"
            
            
            const btnData = document.createElement("p")
            btnData.innerText = element.createdAt
            // continuar
            // divBtn.append(btnEditar, btnApagar, btnData)
            // divTextPost.append(nomePerfil, textoPost)
            // divImgPost.append(imgPost)
            divBtn.append(btnEditar, btnApagar)
            divTextPost.append(nomePerfil,textoPost )
            divPost.append(divImgPost, divTextPost, divBtn)
            listaPost.append(divPost)
        });
    }
    static async updatePost(id, contentUpdate){
            return await fetch(`${base_url}/${id}`, {
                    method: "PATCH",
                    headers: this.headers,
                    body: JSON.stringify(contentUpdate)
                })
                .then(res => res.json())
                .catch(err => console.log(err))
        
    }
    static async deletePost(id){
                const base_url = "https://blog-m2.herokuapp.com/posts"
        
                return await fetch(`${base_url}/${id}`, {
                    method: "DELETE",
                    headers: this.headers
                })
                .then(res => res.json())
                .catch(err => console.log(err))
    }
}
Post.renderizaPost()
Post.renderizaPerfil()
Post.btnAdicionar.addEventListener("click", Post.adicionarPost())

const buttonLogout = document.querySelector(".button-logout")
buttonLogout.addEventListener('click', (event)=>{
    console.log(event.target)
    window.location.href = "../../src/index.html"
    localStorage.clear()

})