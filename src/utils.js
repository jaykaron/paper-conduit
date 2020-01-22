
const fetchApi = async (url, callback) => {
  const response = await fetch(url)

  const data = await response.json()
  callback(data)
}

export { fetchApi }
