import React from "react";
import Dog2 from "../../../../public/Dog2.svg";
import Blog2 from "../../../../public/blog-4-820x500.jpg.png";
import Blog3 from "../../../../public/blog-8-820x500.jpg.png";
import Image from "next/image";

const Blog = (): any => {
  const blogs: { title: string; desc: string; img: any }[] = [
    {
      title: "How to Choose the Right Bully Stick for Your Dog",
      desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
      img: Dog2,
    },
    {
      title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
      desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
      img: Blog2,
    },
    {
      title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
      desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
      img: Blog3,
    },
  ];
  return (
    <div className="flex flex-col gap-8" id="shop">
      <h1 className="mx-auto">Our Blogs</h1>
      <div className="mt-14 mx-auto max-w-screen-2xl flex flex-row flex-wrap justify-center gap-20">
        {blogs?.map((blog, index) => (
          <div className="w-[350px]" key={index}>
            <Image src={blog.img} alt="Blog" />
            <div className=" pt-3 flex flex-col gap-1 pb-4">
              <p className=" text-secondary text-[20px] font-extrabold">
                {blog.title}
              </p>
              <p className=" text-[14px]">{blog.desc}</p>
              <div className="flex mt-4">
                <button className=" rounded-lg bg-secondary px-3 text-white hover:bg-primary/70 duration-200 ease-in-out py-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
