function MoonFilter({ moonPie, setMoonPie }) {

  return (
    <>

      <label htmlFor="moon-search">Search for a moon:</label>

      <input type="text" 
      name="moon-search" 
      onChange={ event => setMoonPie(event.target.value) }
      value={moonPie} />

    </>
  )

}

export default MoonFilter
