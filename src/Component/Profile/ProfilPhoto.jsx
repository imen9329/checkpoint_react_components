import React from "react";
import profilPhoto from "../../profilPhoto.jpeg";
const ProfilPhoto = () => {
    return (
        <div>
            <img className="photo" src={profilPhoto} alt="profil photo" />
        </div>
    );
};

export default ProfilPhoto;
