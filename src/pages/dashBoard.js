export default class MainPage{

    static main = document.querySelector("main")

    static header(){
        const header = document.createElement("header");
        const containerHeader = document.createElement("div");
        const figHeader = document.createElement("figure");
        const imgHeader = document.createElement("img")
        imgHeader.src="src/assets/gatoFofinho.png"
        imgHeader.alt ="GatinhoFofo"
        const titleHeader = document.createElement("h1")
        const button = document.createElement("button")

        containerHeader.classList.add("container-cabecalho")
        header.classList.add("cabecalho");
        button.innerText= "Login"

        containerHeader.append(figHeader, imgHeader,titleHeader)
        header.appendChild(containerHeader)
        this.main.appendChild(header)

    }
    static bodyPage(){
        const containerText = document.createElement("div")
        const inputPost = document.createElement("input")
        const btnTextArea = document.createElement("button")

        containerText.classList.add("container-textarea");
        inputPost.name = "post";
        inputPost.id ="newPost";
        inputPost.cols = "30";
        inputPost.rows = "10";
        inputPost.placeholder = " Comece seu post incrivel";
        btnTextArea.innerText= " + "

        containerText.append(inputPost, btnTextArea)
        this.main.appendChild(containerText)

        const containerPosts = document.createElement("ul")
        containerPosts.classList("container-posts")

        const itemPost = document.createElement("li");
        itemPost.classList.add("item-post")

        const containerImgPost = document.createElement("div")
        containerImgPost.classList.add("container-post-img")

        const figureContainerPost = document.createElement("figure")
        figureContainerPost.classList.add("container-img-post")

        const imgPost = document.createElement("img")
        imgPost.src= "src/assets/gatoFofinho.png"

        const containerContent = document.createElement("div");
        containerContent.classList.add("container-content")

        const titleContent = document.createElement("h2")
        const pContent = document.createElement("p")

        const containerLinks = document.createElement("div")
        containerLinks.classList.add("container-links")
        const linkEditar = document.createElement("a")
        const linkApagar = document.createElement("a")
        const datePost = document.createElement("p");

        containerLinks.append(linkEditar, linkApagar, datePost)
        containerContent.append(titleContent, pContent)
        containerImgPost.append(figureContainerPost, imgPost)
        itemPost.append(containerImgPost, containerContent, containerLinks)




    }
}