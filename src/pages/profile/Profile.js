import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  updatePhoto,
  updateUser,
} from "../../redux/features/auth/authSlice";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import { shortenText } from "../../utils";

const upload_preset = "upload_interact";
const cloud_name = "interact1";
const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
    photo: user?.photo || "",
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user?.name || "",
        email: user?.email || "",
        role: user?.role || "",
        photo: user?.photo || "",
      });
    }
  }, [dispatch, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    const userData = {
      name: profile.name,
    };
    await dispatch(updateUser(userData));
  };

  const savePhoto = async (e) => {
    e.preventDefault();
    let imageURL;

    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", cloud_name);
        // Add the upload preset to the FormData
        image.append("upload_preset", upload_preset);

        // Save image to Cloudinary using the updated URL
        const response = await fetch(url, {
          method: "post",
          body: image,
        });
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      //   Save image to mongo db
      const userData = {
        photo: profileImage ? imageURL : profile.photo,
      };
      await dispatch(updatePhoto(userData));
      setImagePreview(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Layout title={"Profile - Interact Me"}>
      <>
        <div className="container mx-auto py-8">
          {isLoading && <Loader />}
          <h1 className="text-2xl font-semibold mb-4">Settings</h1>

          {/* Profile Settings */}
          <div className="mb-8">
            <div className="mb-4 flex items-center">
              <img
                src={imagePreview === null ? user?.photo : imagePreview}
                alt="Profile"
                className="w-32 h-32 rounded-full bg-black"
              />
              {imagePreview !== null && (
                <button
                  onClick={savePhoto}
                  className="ml-8 px-3 p-2 border rounded-lg bg-greenColor text-white font-bold"
                >
                  <i className="ri-file-upload-line"></i> Upload this Photo
                </button>
              )}
            </div>

            <form onSubmit={saveProfile}>
              {/* Change Photo */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Change Photo:
                </label>
                <input
                  type="file"
                  className="border rounded py-2 px-3 w-full"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              {/* Change Name */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="border rounded py-2 px-3 w-full"
                  value={profile?.name}
                  onChange={handleInputChange}
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile?.email}
                  className="border rounded py-2 px-3 w-full bg-gray-100"
                  onChange={handleInputChange}
                  disabled
                />
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-greenColor px-7 pb-2.5 pt-3 text-md font-bold  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export const UserName = () => {
  const { user } = useSelector((state) => state.auth);

  const username = user?.name || "...";

  return <span>{shortenText(username, 10)}</span>;
};

export default Profile;
