import React from 'react'
import { UserCard } from '../../components'

const Profile:React.FC=()=>{
  return (
    <div>
       <UserCard
        profilePic="/profile.jpg"
        name="John Doe"
        tagName="johndoe"
        signedUp="March 2023"
        contact="+1 234 567 890"
        lastTripDate="Jan 15, 2024"
        noOfTrips={45}
        tripsImage="/trips.png"
        co2Avoided="120 kg"
        co2Image="/co2.png"
        credsEarned={500}
        credsEarnedImage="/credits.png"
        credsRedeemed={200}
        credsRedeemedImage="/redeemed.png"
      />
    </div>
  )
}

export default Profile
