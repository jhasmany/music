import axios from 'axios'

const trackService = {}
const url = 'https://platzi-music-api.herokuapp.com'

trackService.search = function(nombre) {
    return axios.get(url+'/search?q='+nombre+'&type=track')
}

trackService.getById = function(id) {
    return axios.get(url+'/tracks/'+id)
}

export default trackService