import React from "react";

// get data useing API----------server Side Rendering--------->>>> start --->>>
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
// get data useing API----------server Side Rendering--------->>>> end --->>>

const page = async () => {
  // call API----------server Side Rendering--------->>>> start --->>>
  const data = await getData();
  //   console.log(data);
  // call API----------server Side Rendering--------->>>> end --->>>

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl capitalize my-10 font-bold text-purple-500 inline-block border-b-8 border-yellow-500 " >Users Page page</h1>
      <div className="flex justify-between gap-10 flex-wrap">

      {data.map((item) => (
        <div key={item.id} className="w-[30.7%] bg-purple-700 p-6 rounded-lg text-white">
            <h1>Name: {item.name}</h1>
            <h2>E-Mail: {item.email}</h2>
            <button className="bg-yellow-500 text-gray-900 mt-5 text-sm font-bold px-3 py-1 rounded-lg">Details</button>

        </div>
          ))}
</div>
    </div>
  );
};

export default page;
