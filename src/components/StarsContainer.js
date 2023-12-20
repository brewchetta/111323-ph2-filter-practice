import { useState, useEffect } from 'react'
import StarFilter from "./StarFilter"
import StarCard from "./StarCard"

function StarsContainer() {

  const starsURL = "http://localhost:4000/stars"

  const [stars, setStars] = useState([])
  const [search, setSearch] = useState(0)

  useEffect(() => {
    fetch(starsURL)
    .then(res => res.json())
    .then( data => setStars(data) )
  }, [])

  const filteredStars = stars.filter( star => star.distance_in_light_years >= search )

  return (
    <div className="white-border-top">

      <h2>Stars of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the stars, map through and display them. Use the StarFilter component to allow users to find stars that many light years or further from the sun.</p>

      <StarFilter search={search} setSearch={setSearch} />

      <div className="grid column-3">

        {filteredStars.map(star => <StarCard key={star.id} star={star} />)}

      </div>

    </div>
  )

}

export default StarsContainer
