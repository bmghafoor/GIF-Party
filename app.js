const form = document.getElementById('form')
const search = document.getElementById('search')


form.addEventListener('submit',function(e){
    e.preventDefault()
    const text = document.getElementById('gif')
    get(`${text.value}`)
    text.value = ''
})


async function get(keyword){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    randomNum = Math.floor(Math.random() * res.data.data.length)
    const url = (res.data.data[randomNum].images.original.url)
    const newMeme = document.createElement('img')
    newMeme.src = url
    document.body.append(newMeme)
}

$('#btn').on('click',function(){$('img').remove()})