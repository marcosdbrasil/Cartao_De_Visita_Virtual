function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //ou

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //alterar a imagem no light e dark mode

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatarmd.png")
    img.setAttribute(
      "alt",
      "Imagem de Marcos Davi sorrindo, com camiseta preta, em um fundo branco"
    )
  } else {
    //se tiver dark mode, manter a image normal
    img.setAttribute("src", "./assets/avatarmd2.png")
     img.setAttribute(
       "alt",
       "Imagem de Marcos Davi sorrindo, com camiseta branca, em um fundo branco"
     )
  }

}
