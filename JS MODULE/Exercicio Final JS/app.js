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
    // console.log('TESTE', anime.images.jpg.image_url)
    // console.log(galleryList)

    // append inside gallery list
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
      galleryList.classList.add('grid-col--2')
    })

    galleryItem.append(imageDom)
    galleryList.classList.remove('grid-col--2')
    galleryList.classList.add('grid-col--4')
  })
}
