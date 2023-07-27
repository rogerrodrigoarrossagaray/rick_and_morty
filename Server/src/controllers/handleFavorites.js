let myFavorites = [];

function postFav(req, res) {
  const newFavorite = req.body;

  if (!newFavorite.id || !newFavorite.name) {
    return res.status(400).json({ message: "Datos incorrectos en la solicitud" });
  }

  const existingFavorite = myFavorites.find((fav) => fav.id === newFavorite.id);
  if (existingFavorite) {
    return res.status(409).json({ message: "El personaje ya está en favoritos" });
  }

  myFavorites.push(newFavorite);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const newFavorites = myFavorites.filter((fav) => fav.id !== Number(id));

  if (newFavorites.length === myFavorites.length) {
    return res.status(404).json({ message: "El personaje no está en favoritos" });
  }

  res.status(200).json(newFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
