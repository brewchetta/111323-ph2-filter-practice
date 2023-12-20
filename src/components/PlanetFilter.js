import { useState } from 'react'

function PlanetFilter({ setPlanetFilter }) {

  function handleChange(event) {
    setPlanetFilter(event.target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="only_planets">True Planets</option>
      <option value="not_planets">Not Planets</option>
    </select>
  )
}

export default PlanetFilter
