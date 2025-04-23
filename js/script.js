// Fonction pour créer un élément HTML pour un album
function createAlbumElement(album) {
    const a = document.createElement('a');
    a.href = `./product.html?id=${album.id}`;

    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = album.cover_url || "./images/default.jpg";
    img.onerror = () => {
        img.src = "./images/default.jpg";
    };
    img.alt = album.title;

    const h3 = document.createElement('h3');
    h3.classList.add('productName');
    h3.textContent = `${album.title} - ${album.artist}`;

    const p = document.createElement('p');
    p.classList.add('productDescription');
    p.textContent = `${album.price} €`;

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    a.appendChild(article);

    return a;
}

// Récupération des albums depuis l'API et affichage
fetch('https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs')
    .then(response => response.json())
    .then(albums => {
        const filteredAlbums = albums.filter(album => album.id !== "7");
        const itemsContainer = document.getElementById('items');

        filteredAlbums.forEach(album => {
            const albumElement = createAlbumElement(album);
            itemsContainer.appendChild(albumElement);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des albums:', error));
