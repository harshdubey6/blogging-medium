import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-screen w-full px-4 sm:px-10 pt-12 max-w-screen-xl">
          <div className="col-span-1 lg:col-span-8">
            <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold">{blog.title}</div>
            <div className="py-3 sm:py-5 text-gray-500 text-sm sm:text-base">Posted On 2nd Dec 2024</div>
            <div className="pt-3 h-screen text-sm sm:text-base">{blog.content}</div>
            
          </div>
          <div className="col-span-1 lg:col-span-4 mt-6 lg:mt-0">
            <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-2">
              <div className="flex flex-col justify-center items-center sm:items-start">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div className="text-center sm:text-left lg:text-center">
                <div className="text-md pt-2 text-gray-500">Author</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-xs sm:text-sm text-slate-500">
                  A random catch phrase to make the author look cool. A random
                  catch
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
