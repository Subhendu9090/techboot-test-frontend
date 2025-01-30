import React from 'react';

export type UserCardProps = {
  profilePic: string;
  name: string;
  tagName: string;
  signedUp: string;
  contact: string;
  lastTripDate: string;
  noOfTrips: number;
  tripsImage: string;
  co2Avoided: string;
  co2Image: string;
  credsEarned: number;
  credsEarnedImage: string;
  credsRedeemed: number;
  credsRedeemedImage: string;
};

const UserCard: React.FC<UserCardProps> = ({
  profilePic,
  name,
  tagName,
  signedUp,
  contact,
  lastTripDate,
  noOfTrips,
  tripsImage,
  co2Avoided,
  co2Image,
  credsEarned,
  credsEarnedImage,
  credsRedeemed,
  credsRedeemedImage,
}) => {
  return (
    <div className="max-w-[251px] bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt="Profile"
        className="object-cover w-[60px] h-[60px] border-4 border-gray-200 rounded-full"
      />
      <h2 className="text-[24px] font-semibold text-center ">{name}</h2>
      {/* User Info */}
      <div className="flex flex-col w-full gap-2 mt-3">
        <p className="text-sm ">Tag Name: {tagName}</p>
        <p className="text-sm ">Signed Up: {signedUp}</p>
        <p className="text-sm ">Contact: {contact}</p>
      </div>

      {/* Details Section */}
      <div className="w-full mt-4 space-y-3">
        {/* Last Trip */}

        <div className="flex items-center justify-center gap-4 ">
          <p className="text-sm text-gray-600">Last Trip Date:</p>
          <p className="font-semibold text-md">{lastTripDate}</p>
        </div>

        {/* Number of Trips */}
        <div className="flex items-center gap-4 ">
          <img src={tripsImage} alt="Trips" className="w-4 h-4 mr-3" />
          <div className="flex gap-4 ">
            <p className="text-sm text-gray-600">Trips Taken:</p>
            <p className="font-semibold text-md">{noOfTrips}</p>
          </div>
        </div>

        {/* CO2 Avoided */}
        <div className="flex items-center gap-4">
          <img src={co2Image} alt="CO2" className="w-4 h-4 mr-3" />
          <div className="flex gap-4 ">
            <p className="text-sm text-gray-600">CO₂ Avoided:</p>
            <p className="font-semibold text-md">{co2Avoided}</p>
          </div>
        </div>

        {/* Credits Earned */}
        <div className="flex items-center gap-4 ">
          <img
            src={credsEarnedImage}
            alt="Credits Earned"
            className="w-4 h-4 mr-3"
          />
          <div className="flex gap-4 ">
            <p className="text-sm text-gray-600">Credits Earned :</p>
            <p className="font-semibold text-md">{credsEarned}</p>
          </div>
        </div>

        {/* Credits Redeemed */}
        <div className="flex items-center gap-4 ">
          <img
            src={credsRedeemedImage}
            alt="Credits Redeemed"
            className="w-4 h-4 mr-3"
          />
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">Credits Redeemed:</p>
            <p className="font-semibold text-md">{credsRedeemed}</p>
          </div>
        </div>
      </div>

      {/* Deactivate Button */}
      <div className="flex justify-end w-full">
        <button className="px-3 py-2 mt-4 text-sm text-blue-500 border border-blue-400 rounded-lg right-4 hover:bg-blue-600 hover:text-white">
          Deactivate
        </button>
      </div>
    </div>
  );
};

export default UserCard;
