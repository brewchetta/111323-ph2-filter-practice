function StarFilter({ search, setSearch }) {

  return (
    <>

      <label htmlFor="star-search">Lightyears away:</label>

      <input type="number" 
      name="star-search"
      onChange={event => setSearch(parseInt(event.target.value))}
      value={search} />

    </>
  )

}

export default StarFilter
