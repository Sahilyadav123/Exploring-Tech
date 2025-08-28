import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    let {username}=useParams();   
//   const [data, setdata] = useState({});
//   let { username } = useParams();
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((res) => res.json())
//       .then((res) => setdata(res));
//     console.log(data);
//   }, [username]);    

    // const data=useLoaderData()
    const data=useLoaderData()

  return (
    <>
      <div className="text-center text-3xl font-bold bg-gray-600 text-white p-4 mt-10">
        User:{username}
      </div>
      <div className="text-center text-3xl font-bold bg-gray-600 text-white p-4 ">
        Followers:{data.followers}
      </div>
      <div className=" inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
        <img
          className="w-35 h-35 rounded-full mx-auto absolute top-26"
          src={data.avatar_url}
          alt="image1"
        />
      </div>
    </>
  );
}   
export default Github;

export const githubInfoLoader=async ({params})=>{
    let {username}=params;
    // let {username}=useParams();
    const response=await fetch(`https://api.github.com/users/${username}`)
    return response.json();
    console.log(data)
}
