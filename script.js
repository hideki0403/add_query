function p(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

if(p('gl') === null && window.location.search !== '') {
    document.location.href = window.location.href + '&gl=JP'
} else {
    if(window.location.search === '') {
        document.location.href = window.location.href + '?gl=JP'
    }
}