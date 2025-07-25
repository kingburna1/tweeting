'use client';
import { useRef, useState, useEffect } from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlineGif } from 'react-icons/ai';
import { PiChartBarHorizontal } from 'react-icons/pi';
import { VscSmiley } from 'react-icons/vsc';
import { TbCalendarTime } from 'react-icons/tb';
import { MdClose } from 'react-icons/md'; // ❌ icon
import { BASE_URL } from '@/lib/utils'; // Adjust the import path as necessary
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import EmojiPicker from 'emoji-picker-react';
import { useQueryClient } from '@tanstack/react-query';


export default function MakePost() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [content, setContent] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
   const [isSending, setIsSending] = useState(false);
   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
   const QueryClient = useQueryClient();


  // Load user once on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async () => {
    if (!content.trim() && !previewImage) {
      return; // Nothing to submit
    }
     setIsSending(true); // show blur + overlay
    setIsLoading(true);

    const PostPayload = {
      Content: content,
      UserId: user?._id
    };

    try {
      const postResponse = await axios.post(`${BASE_URL}/posts`, PostPayload);
      const newPostId = postResponse.data._id;

      setContent('');

      if (previewImage) {
        
        const MediaPayload = {
          image: previewImage,
          userId: user?._id,
          type: "post",
          postId: newPostId
        };

        await axios.post(`${BASE_URL}/images`, MediaPayload);
        resetImage();
         toast.success("Post Successfully") 
         QueryClient.invalidateQueries({ queryKey: ['posts']})

      }
    } catch (error) {
      console.error("Error submitting post or uploading image:", error);
      toast.error("Failed to post. Please try again.");
    } finally {
      setIsSending(false); // hide blur + overlay
      setIsLoading(false);
      
    }
  };

  const handleEmojiClick = (emojiData) => {
  setContent((prev) => prev + emojiData.emoji);
};

  return (
    <div>
      {/* Post Input */}
      <form className="flex gap-2 items-center px-[3%] py-[1%] text-[.85rem]">
         <ToastContainer position="top-center" />
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          aria-label="Tweet content"
          className="text-gray-500 font-semibold outline-none flex-1"
        />
      </form>

      {/* Image Preview with Close Button */}
   {previewImage && (
  <div className="relative px-[3%] pb-2">
    {/* Blurred image while sending */}
    <img
      src={previewImage}
      alt="Preview"
      className={`rounded-lg w-full max-h-[300px] object-cover border transition duration-300 ${
        isSending ? "blur-sm brightness-75" : ""
      }`}
    />

    {/* Overlay with "is sending..." */}
    {isSending && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-semibold rounded-lg">
        is sending...
      </div>
    )}

    {/* Remove button (only show if not sending) */}
    {!isSending && (
      <button
        onClick={resetImage}
        className="bg-primary absolute top-2 right-6 hover:bg-red-500 rounded-full p-1"
        aria-label="Remove image"
      >
        <MdClose size={18} className="text-white" />
      </button>
    )}
  </div>
)}


      {/* Actions & Submit */}
      <div className="flex items-center justify-between px-[2%] pb-[2%]">
        <ul className="flex gap-3 items-center px-[7.5%]">
          <li onClick={handleImageClick} className="cursor-pointer">
            <HiOutlinePhotograph size={25} className="text-primary" />
          </li>
          <li><AiOutlineGif size={25} className="text-primary" /></li>
          <li><PiChartBarHorizontal size={25} className="text-primary" /></li>

         <li onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="relative cursor-pointer">
  <VscSmiley size={25} className="text-primary" />
  {showEmojiPicker && (
    <div className="absolute top-8 z-10">
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        theme="light" // or "dark" to match your design
        height={350}
        
      />
    </div>
  )}
</li>
          <li><TbCalendarTime size={25} className="text-primary" /></li>
        </ul>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`bg-primary rounded-full font-medium py-2.5 px-6 text-[.9rem] text-white transition duration-200 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {isLoading ? 'Posting...' : 'Tweet'}
        </button>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
 </div>
);
}