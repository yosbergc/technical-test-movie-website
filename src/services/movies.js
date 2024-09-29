import { LINK_TO_GET_MOVIES } from "../consts/links"

function getMovies(query) {
    return fetch(`${LINK_TO_GET_MOVIES}${query}`)
          .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un error en la solicitud')
            }
            return response.json()
          })
          .then(data => {
            if (data?.Search) {
                return data.Search
            } else {
                throw new Error('No se encontró lo que buscabas')
            }
          })
          .catch(error => error)
}

export { getMovies }