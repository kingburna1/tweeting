"use client";
import MenuBar from '@/component/menubar/MenuBar';
import { ModeToggle } from '@/component/toggle/ModeToggle';
import { ArrowLeft, Calendar, Download, Heart, MapPin, MessageCircle, Repeat2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const defaultProfile = {
  name: "wansi mathurin",
  username: "wannsimillion",
  bio: "Web Developer",
  location: "Canada",
  joinDate: "September 2011",
  profileImage: "/wansi3.jpg",
  coverImage: "/wansi5.jpg"
};

const ProfileHomeComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(40);
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const storedProfile = localStorage.getItem("user-profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const saveProfile = (updated) => {
    setProfile(updated);
    localStorage.setItem("user-profile", JSON.stringify(updated));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveProfile({ ...profile, coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleLike = () => {
    setLiked(prev => !prev);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = {
      ...profile,
      name: e.target.name.value,
      username: e.target.username.value,
      bio: e.target.bio.value,
      location: e.target.location.value
    };
    saveProfile(updated);
    setIsEditing(false);
  };

  return (
    <div className='w-full h-fit md:h-[600px] overflow-y-auto'>

      <div className="md:w-full bg-background w-[500px] fixed z-20">
        <div className='w-[300px] md:w-[550px] py-6 md:py-4 px-2 flex justify-between'>
          <div className="flex gap-3 py-4">
            <ArrowLeft color='blue' />
            <div>
              <p className='font-bold'>{profile.name}</p>
              <p className='text-gray-500'>9 Tweet</p>
            </div>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <MenuBar />
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className='relative mt-30'>
        <div className='w-full'>
          <img className="w-full h-[230px] object-fit" src={profile.coverImage} alt="cover" />
        </div>

        <div className='flex justify-between py-2 px-2'>
          <div>
            <div className='absolute top-40 left-5'>
              <img className="w-30 h-30 rounded-full object-covern" src={profile.profileImage} alt="profile" />
            </div>
            <div className='mt-10'>
              <h2 className='font-bold'>{profile.name}</h2>
              <p className="text-gray-500">@{profile.username}</p>
              <p>{profile.bio}</p>
            </div>

            <div className="flex gap-2 py-3">
              <div className="flex gap-1"><MapPin /><p>{profile.location}</p></div>
              <div className="flex gap-1"><Calendar /><p>joined {profile.joinDate}</p></div>
            </div>

            <div className="flex gap-2">
              <div className="flex gap-1"><p>6565</p><p>Following</p></div>
              <div className="flex gap-1"><p>56</p><p>followers</p></div>
            </div>
          </div>

          <div>
            <button
              className='bg-white text-blue-500 px-2 border text-xs md:text-md border-blue-500 rounded-2xl w-full'
              onClick={() => setIsEditing(true)}
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-40 flex items-center justify-center z-50 p-10">
          <div className="bg-white p-6 rounded-xl w-[300px] md:w-[400px] shadow-lg">
            <div className='flex justify-between'>
            <h2 className='text-xl font-bold mb-4'>Edit Profile</h2>
            <img className="w-5 h-5 rounded-full object-fit" src="/twitterLogo.png" alt="profile" />
            </div>
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
            <div className='flex jusstify-center item-center mb-3'>
              <img className="w-20 h-20 rounded-full object-cover" src={profile.profileImage} alt="profile" />
              <div>
                <label className="block mb-1 text-sm font-semibold">Change Profile Picture</label>
                <input type="file" accept="image/*" onChange={handleProfileImageChange} placeholder='upload profile pictuter' />
              </div>
            </div>

               <label className="block mb-1 text-sm font-semibold">Update Name</label>
              <input name="name" type="text" defaultValue={profile.name} className="border p-2 rounded" placeholder='Enter Name' />
              <input name="username" type="text" defaultValue={profile.username} className="border p-2 rounded" placeholder="Enter User Name" />
              
              <input name="bio" type="text" defaultValue={profile.bio} className="border p-2 rounded" placeholder='Enter Bio' />
              
              <input name="location" type="text" defaultValue={profile.location} className="border p-2 rounded" placeholder='Enter Location' />

           

              <div >
                <label className="block mb-1 text-sm font-semibold">Change Cover Photo</label>
                <input type="file" accept="image/*" onChange={handleCoverImageChange} placeholder='Upload cover photo' />
              </div>

              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sample Post */}
      <div className='w-full border-b-2 py-2'>
        <div className='flex gap-2 px-2 py-2'>
          <img className='w-15 h-15 rounded-full' src="/mansi.jpg" alt="image you post" />
          <div>
            <div className='flex gap-2'>
              <h3 className='font-bold'>davon lane <span className='text-gray-500'>@macelobobinaone</span></h3>
              <p className='text-gray-400'>23s</p>
            </div>
            <h5>is this big enough for you</h5>
          </div>
        </div>

        <div className='px-3 pl-17'>
          <img className='h-[200px] w-full object-fit rounded-2xl' src="spaceman.jpg" alt="post" />

          <div className='flex justify-between w-full mt-2'>
            <div className='flex gap-2'><MessageCircle /><p>12</p></div>
            <div className='flex gap-2'><Repeat2 /><p>28</p></div>
            <div className='flex gap-2'>
              <Heart onClick={toggleLike} className={liked ? 'text-red-600' : 'text-blue-700'} />
              <p>{likesCount}</p>
            </div>
            <div className="flex gap-2"><Download /><p>10</p></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileHomeComponent;
// This component is a profile home page that includes user profile information, an edit profile modal, and a sample post with interaction features like liking and commenting.