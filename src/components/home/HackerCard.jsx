import React from 'react'
import HackerCardContainer from './HackerCardContainer'

const HackerCard = ({ hackers }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hackers.map((hacker) => {
        return <HackerCardContainer key={hacker._id} hacker={hacker} />
      })}
    </div>
  )
}

export default HackerCard
