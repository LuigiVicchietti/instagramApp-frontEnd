let homeLink = document.getElementById("homeLink"),
    productLink = document.getElementById("productLink"),
    categoryLink = document.getElementById("categoryLink"),
    devsLink = document.getElementById("devsLink"),
    currentLink = window.location.href

if (currentLink === homeLink.href) {
    homeLink.style.color = "#0190bc"
} else if (currentLink === productLink.href) {
    productLink.style.color = "#0190bc"
} else if (currentLink === categoryLink.href) {
    categoryLink.style.color = "#0190bc"
} else if (currentLink === devsLink.href) {
    devsLink.style.color = "#0190bc"
}