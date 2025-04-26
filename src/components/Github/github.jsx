import { React } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  return(
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="Github Profile Image" width={300}/>
      Name: { data.name} <br />
      Github Followers: {data.followers}
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
}