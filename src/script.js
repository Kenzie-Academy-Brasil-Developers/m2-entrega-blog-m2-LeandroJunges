import LoginRequest from "./script/login.script.js";
import Cadastro from "./script/cadastro.script.js";
import Post from "./script/controller.post.js";
import MainPage from "./pages/dashBoard.js";

const login = await LoginRequest.login(
  {
    "email": "teste@kenzie.com.br",
    "password": "Teste123"
  }
  
)

 const cadastrarUsuario = await Cadastro.createUser()
 
  console.log(cadastrarUsuario)
  console.log(login)
  const post = await PostRequest.viewPosts(15)
  console.log(post)

  const renderizarPosts = Post.renderizaPost()
  Post.renderizaPost()
  Post.renderizaPerfil()
  console.log(renderizarPosts)