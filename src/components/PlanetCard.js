function PlanetCard({ planet }) {

  return (
    <div className="white-border">

      <h3>{planet.name}</h3>

      <p>Planet Orbital Period: {planet.orbital_period_in_earth_days} days</p>

      <p>{planet.fun_fact}</p>

      <p>{planet.is_planet ? "This is a planet" : `Definitely not a planet, sorry ${planet.name}`}</p>

    </div>
  )

}

export default PlanetCard
