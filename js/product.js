// Récupère l'ID de l'album depuis l'URL
const params = new URLSearchParams(window.location.search);
const albumId = params.get("id");

// Vérifie si l'ID est présent
if (albumId) {
  fetch(`https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs/${albumId}`)
    .then(response => response.json())
    .then(album => {
      // Affiche les données de l'album dans la page
      const container = document.querySelector("main");

      const img = document.createElement("img");
      img.src = album.cover_url || "./images/default.jpg";
      img.onerror = () => {
        img.src = "./images/default.jpg";
      };
      img.alt = album.title;

      const h1 = document.createElement("h1");
      h1.textContent = `${album.title} - ${album.artist}`;

      const price = document.createElement("p");
      price.textContent = `Prix : ${album.price} €`;

      const description = document.createElement("p");
      description.textContent = album.description || "Aucune description disponible.";

      container.appendChild(img);
      container.appendChild(h1);
      container.appendChild(price);
      container.appendChild(description);
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'album :", error);
    });
} else {
  console.error("Aucun identifiant d'album fourni dans l'URL.");
}
