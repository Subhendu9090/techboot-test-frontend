import React from 'react';
import { UserCard } from '../../components';
import { CalendarDays, Search } from 'lucide-react';

const users = [
  {
    profilePic: '/Profile/divyank-sachdeva-iQLqpFqzwnc-unsplash 9.svg',
    name: 'John Doe',
    tagName: 'johndoe',
    signedUp: 'March 2023',
    contact: '+1 234 567 890',
    lastTripDate: 'Jan 15, 2024',
    noOfTrips: 45,
    co2Avoided: '120 kg',
    credsEarned: 500,
    credsRedeemed: 200,
  },
  {
    profilePic: '/profile2.jpg',
    name: 'Jane Smith',
    tagName: 'janesmith',
    signedUp: 'April 2022',
    contact: '+1 987 654 321',
    lastTripDate: 'Feb 20, 2024',
    noOfTrips: 60,
    co2Avoided: '150 kg',
    credsEarned: 700,
    credsRedeemed: 300,
  },
  {
    profilePic: '/profile3.jpg',
    name: 'Alice Johnson',
    tagName: 'alicej',
    signedUp: 'May 2021',
    contact: '+1 456 789 123',
    lastTripDate: 'Dec 30, 2023',
    noOfTrips: 80,
    co2Avoided: '200 kg',
    credsEarned: 900,
    credsRedeemed: 400,
  },
  {
    profilePic: '/profile1.jpg',
    name: 'John Doe',
    tagName: 'johndoe',
    signedUp: 'March 2023',
    contact: '+1 234 567 890',
    lastTripDate: 'Jan 15, 2024',
    noOfTrips: 45,
    co2Avoided: '120 kg',
    credsEarned: 500,
    credsRedeemed: 200,
  },
  {
    profilePic: '/profile2.jpg',
    name: 'Jane Smith',
    tagName: 'janesmith',
    signedUp: 'April 2022',
    contact: '+1 987 654 321',
    lastTripDate: 'Feb 20, 2024',
    noOfTrips: 60,
    co2Avoided: '150 kg',
    credsEarned: 700,
    credsRedeemed: 300,
  },
  {
    profilePic: '/profile3.jpg',
    name: 'Alice Johnson',
    tagName: 'alicej',
    signedUp: 'May 2021',
    contact: '+1 456 789 123',
    lastTripDate: 'Dec 30, 2023',
    noOfTrips: 80,
    co2Avoided: '200 kg',
    credsEarned: 900,
    credsRedeemed: 400,
  },
  {
    profilePic: '/profile1.jpg',
    name: 'John Doe',
    tagName: 'johndoe',
    signedUp: 'March 2023',
    contact: '+1 234 567 890',
    lastTripDate: 'Jan 15, 2024',
    noOfTrips: 45,
    co2Avoided: '120 kg',
    credsEarned: 500,
    credsRedeemed: 200,
  },
  {
    profilePic: '/profile2.jpg',
    name: 'Jane Smith',
    tagName: 'janesmith',
    signedUp: 'April 2022',
    contact: '+1 987 654 321',
    lastTripDate: 'Feb 20, 2024',
    noOfTrips: 60,
    co2Avoided: '150 kg',
    credsEarned: 700,
    credsRedeemed: 300,
  },
  {
    profilePic: '/profile3.jpg',
    name: 'Alice Johnson',
    tagName: 'alicej',
    signedUp: 'May 2021',
    contact: '+1 456 789 123',
    lastTripDate: 'Dec 30, 2023',
    noOfTrips: 80,
    co2Avoided: '200 kg',
    credsEarned: 900,
    credsRedeemed: 400,
  },
];

const Profile: React.FC = () => {
  return (
    <div className="container px-4 py-6 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-center">User Profiles</h2>
      <div className="flex flex-wrap justify-end gap-2 outline-none">
        <div className="relative inline-block text-center">
          <CalendarDays className="absolute w-5 h-5 text-[#175AB6] transform -translate-y-1/2 left-3 top-1/2" />
          <select className="py-2 pl-8 border text-[#175AB6] border-[#175AB6] outline-none rounded-xl">
            <option value="opt 1">Today</option>
            <option value="opt 2">Yesterday</option>
            <option value="opt 3">Last 7 Days</option>
            <option value="opt 4">Last 30 Days</option>
            <option value="opt 5">Custom</option>
          </select>
        </div>

        <div className=" w-[100px] bg-blue-600 rounded-xl"></div>
        <button className="p-2 border border-blue-600 rounded-xl">
          Export
        </button>
        <div className="flex items-center gap-2 px-4 border border-blue-600 hover:cursor-pointer rounded-xl">
          <input
            className="w-32 bg-transparent border-none outline-none "
            name="search"
            type="text"
            placeholder="Search Hear "
            value={''}
          ></input>
          <Search className=" text-[#707070]" />
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-4 py-4 ">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
