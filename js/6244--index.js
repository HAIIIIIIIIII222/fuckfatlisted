let titles = ['l...','la...','lar...','larp...','larpi...','larpis...','larpist...','larpis..','larpi...','larp...','lar...','la...','l...']
let index = 0
let interval = setInterval(() => {
    document.title = titles[index]
    index += 1
    if (index === titles.length) index = 0
}, 500)