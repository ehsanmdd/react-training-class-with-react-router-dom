import axios from "axios";
import React, { useEffect, useState } from "react";

function Gallery() {
  const [photo, setPhoto] = useState([]);

  try {
    const accessKey = "L1fMNhdnGETSoUcc2hsqngC7ASeFEHJcI_rjRqp9jTE";
    const photoData = async () => {
      await axios
        .get(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
        .then((res) => {
          setPhoto(res.data);
          console.log(res.data);
        });
    };
    useEffect(() => {
      photoData();
    }, []);

  } catch (error) {
    console.error( " Error To Get Photos :" + error.message  )
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photo.map((photo) => (
          <img
            key={photo.id}
            className="w-full h-48 object-cover rounded-lg"
            src={photo.urls.small}
            alt="Unsplash photo"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
