import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import FeedLayout from "../components/feed-layout";
import Footer from "../components/footer";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Dashboard = ({ pageTitle, children }) => {
  return (
    <div>
      <title>Book Nook | {pageTitle}</title>
      <header>
        <div
          className="stars-bg bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </header>

      <nav>
        <div className="w-[80%] my-8 flex justify-between items-center mx-auto">
          <h1 className="font-light drop-shadow-lg py-4 text-5xl md:text-7xl">
            <Link to="/search" className="text-[#027bce] hover:text-[#03cea4]">
              Book<span className="text-[#03cea4]">Nook</span>
            </Link>
          </h1>
          <ul className="h-full flex items-center list-none z-[5] text-base">
            {/* NAVIGATION LINKS HERE */}

            <AnchorLink
              class="bg-gray-100 p-2 rounded-lg text-amber-500 hover:text-amber-700  font-semibold mr-6"
              href="#Trending"
            >
              Trending
            </AnchorLink>
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900 font-semibold mr-6"
              href="/search"
            >
              Search
            </a>

            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="/profile"
            >
              Profile
            </a>
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="#"
            >
              Logout
            </a>
          </ul>
        </div>
      </nav>

      <main className="z-[5] pb-5">{children}</main>
      <FeedLayout />
      <Footer />
    </div>
  );
};
export default Dashboard;
