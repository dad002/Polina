function createContentBlock(href, description) {
    let resTag = document.createElement("div")
    resTag.classList.add('some-content')

    let title = document.createElement('h2')
    title.innerText = description

    let video = document.createElement('iframe')
    video.src = href
    // video.controls = true

    resTag.append(title)
    resTag.append(video)

    console.log(resTag)
    return resTag
}

function updateData() {
    fetch("/updateData", {method: 'GET', credentials: 'include'})
    .then(response => response.json())
    .then(json => {
        let main = document.getElementById("main")
        json.forEach(el => {
            console.log(el)
            main.append(createContentBlock(el.href, el.description))
        })
    })
}

window.addEventListener("load", () => {
    if (document.getElementById('main-content')) updateData()
})