import React from 'react'
import { useState } from 'react'

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
  const file = event.target.files[0];
  setSelectedImage(URL.createObjectURL[file]);
  };

    
  return (
    <div>
    <input type="file" onChange={handleImageChange} />
    {selectedImage && (
    <img src={selectedImage} alt="Selected" className='w-32 h-32 bg-slate-500'/>
    )}
    </div>
  )
}

export default UploadImage