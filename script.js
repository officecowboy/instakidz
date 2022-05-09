function menuSelect() {

  const navHome = document.querySelector("#home")
  const navUpload = document.querySelector("#upload")
  const navPics = document.querySelector("#profile")

  const post = document.querySelectorAll(".post-container")

  navHome.addEventListener("click", function () {
    post[0].style.display = 'initial'
    post[1].style.display = 'initial'
    post[2].style.display = 'initial'
  })

  navUpload.addEventListener("click", function () {
    post[0].style.display = 'none'
    post[1].style.display = 'none'
    post[2].style.display = 'none'
  })

  navPics.addEventListener("click", function () {
    post[0].style.display = 'none'
    post[1].style.display = 'initial'
    post[2].style.display = 'none'
  })

}

menuSelect()