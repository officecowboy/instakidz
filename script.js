function menuSelect() {

  const navHome = document.querySelector("#home")
  const navUpload = document.querySelector("#upload")
  const navPics = document.querySelector("#profile")

  const post = document.querySelectorAll(".post-container")
  const upload = document.querySelector(".upload")

  navHome.addEventListener("click", function () {
    post[0].style.display = 'initial'
    post[1].style.display = 'initial'
    post[2].style.display = 'initial'
    upload.style.display = 'none'
  })

  navUpload.addEventListener("click", function () {
    post[0].style.display = 'none'
    post[1].style.display = 'none'
    post[2].style.display = 'none'
    upload.style.display = 'flex'
  })

  navPics.addEventListener("click", function () {
    post[0].style.display = 'none'
    post[1].style.display = 'initial'
    post[2].style.display = 'none'
    upload.style.display = 'none'
  })

}

menuSelect()