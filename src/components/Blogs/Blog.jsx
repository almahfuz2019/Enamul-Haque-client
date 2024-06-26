import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = ({ AllBlogs }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Map through AllBlogs array and render each blog item */}
      {AllBlogs.map((BlogItem) => (
        <div key={BlogItem.id} className="service-item">
          <article className="lg:p-5 p-3 overflow-hidden border border-gray-300 bg-white shadow-sm">
            <img
              alt={BlogItem?.title}
              src={BlogItem?.img}
              className="h-56 w-full object-cover"
            />
            <div className="mt-5">
              <p className="line-clamp-3 text-sm md:text-base text-gray-500 font-bold">
                {BlogItem?.date}
              </p>

              <h3 className="text-base md:text-2xl font-bold">
                {BlogItem?.title}
              </h3>

              <Link
                to={`/blog/${BlogItem.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="group mt-4 flex items-center gap-1 text-base md:text-xl font-medium text-primary"
              >
                Read More
                <span
                  aria-hidden="true"
                  className="md:text-base text-sm font-extrabold block text-primary transition-all group-hover:ms-0.5 rtl:rotate-180 mt-1"
                >
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

// PropTypes validation for AllBlogs prop
Blog.propTypes = {
  AllBlogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
    }),
  ).isRequired,
};

export default Blog;
