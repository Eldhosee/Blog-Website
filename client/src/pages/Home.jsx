import { Link } from 'react-router-dom';
import bg from "../assets/blog-bg.webp";
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex overflow-hidden h-[100vh]'>
        <img src={bg} alt="image" className=' w-[60%] max-md:hidden flex-1'/>

      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Digital Horizons</h1>
        <p className='text-gray-500 mt-5 text-md max-md:text-sm text-clip'>
         Where Tech Meets All. Explore the vast landscape of information technology and beyond. From coding to culture, gadgets to global trends, we cover it all. Join us on a journey through the ever-evolving world of tech, where innovation meets insight and curiosity knows no bounds. Welcome to your digital playground, where every click unveils a new frontier
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      </div>
      

      <div className=' mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
