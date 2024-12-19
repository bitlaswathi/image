const accessKey = 'tRlcyktUaXVBU-ciQDrYeQiIj-muBaTx7eb1Oxp_HSk'

const SearchE1 = document.querySelector('form')
const Searchinput = document.getElementById('search-input')
const Sresults = document.querySelector('.show-results')
const showMore = document.getElementById('show-more-btn')


let inputdata = ''
let page = 1

async function SearchImage(){
    inputdata = Searchinput.value 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page==1){
        Sresults.innerHTML  = ''

    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('show-result')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.target = '_blank'
        imageLink.textContent = result.alt_description


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        Sresults.appendChild(imageWrapper)

    })
    
    page++
    if(page > 1){
        showMore.style.display = 'block'

    }
}

SearchE1.addEventListener('submit',(event)=>{
        event.preventDefault()
        page = 1
        SearchImage()

})
showMore.addEventListener('click',()=>{
        
        SearchImage()

    })






