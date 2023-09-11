import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("An error happend .Please Click console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center bottom-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
        <h3 className="text-2xl"> Are tou Sure you want to delete this book</h3>
        <button
          onClick={handleDeleteBook}
          className="p-4 bg-red-600 text-white m-8 w-full"
        >
          Yes Delete it{" "}
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;