console.log('js app ok')
const sectionGalleryDom = document.createElement('section')

sectionGalleryDom.classList.add('gallery', 'grid')

// apeend to body
document.body.appendChild(sectionGalleryDom)

//! do better comments
const galleryListDom = document.createElement('div')
galleryListDom.classList.add('gallery-list', 'grid', 'grid-col--4')

//! do better comments
const displayInfo = document.createElement('div')
displayInfo.classList.add('display-info')

// append to section
sectionGalleryDom.appendChild(galleryListDom)
sectionGalleryDom.appendChild(displayInfo)

// display inside
const nameDom = document.createElement('div')
nameDom.classList.add('name')
nameDom.innerText = 'Name'

const ratingDom = document.createElement('div')
ratingDom.classList.add('rating')
ratingDom.innerText = 'rating dom'

const launchDateDom = document.createElement('div')
launchDateDom.classList.add('launch-date')
launchDateDom.innerText = 'launch date'

const genreDom = document.createElement('div')
genreDom.classList.add('genre')
genreDom.innerText = 'genre'

const imageBigDom = document.createElement('img')
imageBigDom.classList.add('imageBig')

const cancelButton = document.createElement('button')
cancelButton.innerText = 'back'
cancelButton.onclick = () => {
  const galleryList = document.getElementsByClassName('gallery-list')[0]
  const gallery = document.getElementsByClassName('gallery')[0]
  const displayInfo = document.getElementsByClassName('display-info')[0]

  displayInfo.style.display = 'none'

  //! apagar depois
  const nada = 2

  gallery.classList.remove('grid-col--2')
  galleryList.classList.remove('grid-col--2')
  galleryList.classList.add('grid-col--4')
}

displayInfo.append(
  imageBigDom,
  nameDom,
  ratingDom,
  launchDateDom,
  genreDom,
  cancelButton,
)
displayInfo.style.display = 'none'

// need to receive info from  API
function renderOpenDisplayInfo(id) {}
function renderCloseDisplayInfo() {}

function renderColumnsNumber(columnsNumber) {}

//?  API section
const url = 'https://api.jikan.moe/v4/top/anime'

async function getAnime() {
  const request = await fetch(url)
  const response = await request.json()
  const data = await response.data

  renderImagesCards(data)
}
getAnime()

function renderImagesCards(animes) {
  // console.log(animes)
  const galleryList = document.getElementsByClassName('gallery-list')[0]

  animes.forEach((anime, index) => {
    const galleryItem = document.createElement('div')
    galleryItem.classList.add('gallery-item')
    galleryList.append(galleryItem)

    const imageDom = document.createElement('img')
    imageDom.src = anime.images.jpg.image_url
    imageDom.classList.add('image-thunbaill')

    imageDom.addEventListener('click', () => {
      const gallery = document.getElementsByClassName('gallery')[0]
      const galleryList = document.getElementsByClassName('gallery-list')[0]
      const displayInfo = document.getElementsByClassName('display-info')[0]

      imageBigDom.src = anime.images.jpg.image_url
      window.scrollTo({ top: 0, behavior: 'smooth' })

      imageBigDom.addEventListener('click', () => {
        const modal = document.getElementsByClassName('modal')[0]
        if (modal) modal.remove()

        const imageDom2 = document.createElement('img')
        imageDom2.src = anime.images.jpg.image_url
        imageDom2.classList.add('imageBig')

        const modalDom = document.createElement('div')
        modalDom.classList.add('modal')
        modalDom.append(imageDom2)
        document.body.append(modalDom)

        const buttonDom = document.createElement('button')
        buttonDom.innerText = 'close'
        buttonDom.addEventListener('click', () => {
          modalDom.remove()
        })

        modalDom.append(buttonDom)
      })

      nameDom.innerText = anime.title
      ratingDom.innerText = anime.rating
      launchDateDom.innerText = anime.aired.from

      displayInfo.style.display = 'block'
      gallery.classList.add('grid-col--2')
      galleryList.classList.remove('grid-col--4')
      galleryList.classList.add('grid-col--2')
    })

    galleryItem.append(imageDom)
    galleryList.classList.remove('grid-col--2')
    galleryList.classList.add('grid-col--4')
  })

  renderCarrousel(animes)
}

function renderCarrousel(animes) {
  const { imageDom, backButton, nextButton, imageRightDom, imageLeftDom } =
    buildCarrouselDom().data

  let count = 0
  imageDom.src = animes[count].images.webp.image_url
  imageLeftDom.src = animes[animes.length - 1].images.webp.image_url
  imageRightDom.src = animes[count + 1].images.webp.image_url

  nextButton.addEventListener('click', () => {
    console.log('count', count)
    count === animes.length - 1 ? (count = 0) : ++count
    const next = count + 1 > animes.length - 1 ? 0 : count + 1
    const back = count - 1 < 0 ? animes.length - 1 : count - 1

    console.log('back', back, 'count', count, 'next', next)

    imageDom.src = animes[count].images.webp.image_url
    imageLeftDom.src = animes[back].images.webp.image_url
    imageRightDom.src = animes[next].images.webp.image_url
  })

  backButton.addEventListener('click', () => {
    count === 0 ? (count = animes.length - 1) : --count
    imageDom.src = animes[count].images.webp.image_url
    const next = count + 1 === animes.length ? 0 : count + 1
    const back = count - 1 <= 0 ? animes.length - 1 : count - 1

    console.log('count', count, 'back', back, 'next', next)

    imageDom.src = animes[count].images.webp.image_url
    imageLeftDom.src = animes[back].images.webp.image_url
    imageRightDom.src = animes[next].images.webp.image_url
  })
}

function buildCarrouselDom() {
  const carrouselDom = document.createElement('div')
  carrouselDom.classList.add('carrousel')

  const divImageDom = document.createElement('div')
  divImageDom.classList.add('container-image')

  const imageDom = document.createElement('img')
  imageDom.classList.add('image-carrousel')

  const imageLeftDom = document.createElement('img')
  imageLeftDom.classList.add('image-small')

  const imageRightDom = document.createElement('img')
  imageRightDom.classList.add('image-small')

  const backButton = document.createElement('button')
  backButton.classList.add('button', 'btn--transparent')
  backButton.textContent = '<'

  const nextButton = document.createElement('button')
  nextButton.classList.add('button', 'btn--transparent')
  nextButton.textContent = '>'

  carrouselDom.append(backButton)

  divImageDom.append(imageLeftDom)
  divImageDom.append(imageDom)
  divImageDom.append(imageRightDom)

  carrouselDom.append(divImageDom)
  carrouselDom.append(nextButton)
  document.body.appendChild(carrouselDom)

  return {
    data: { imageDom, imageLeftDom, imageRightDom, backButton, nextButton },
  }
}
