import { useState } from "react";
import "../App.css";
import { useGetWidgetsQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";
export default function Navbar() {
  let [home, setHome] = useState(true);
  let [hamMenu, setHamMenu] = useState(false);
  let [search, setSearch] = useState("");
  let data = [];
  const {
    data: WidgetsList,
    isSuccess,
    sError,
    isLoading,
    error,
  } = useGetWidgetsQuery();
  if (isLoading) {
    data = ["loading"];
  } else if (isSuccess) {
    WidgetsList.map((index) => {
      data = [...data, index.widgetTitle];
    });
  } else {
    data = [error.message];
  }
  return (
    <header className="bg-white max-width ">
      <div className="mx-auto width px-1 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <nav aria-label="Breadcrumb" className="flex">
              <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                <Link to="/">
                  <li className="flex items-center">
                    <a
                      href="#"
                      onClick={() => {
                        setHome(!home);
                      }}
                      className={
                        home
                          ? "flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900 text-cyan-600"
                          : "flex h-10 items-center gap-1.5 bg-white px-4 transition hover:text-gray-900 text-cyan-600"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>

                      <span className="ms-1.5 text-xs font-medium"> Home </span>
                    </a>
                  </li>
                </Link>
                <Link to="/dashboard">
                  <li
                    onClick={() => {
                      setHome(!home);
                    }}
                    className="relative flex items-center"
                  >
                    <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                    <a
                      href="#"
                      className={
                        home
                          ? "flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 text-cyan-600"
                          : "flex h-10 items-center bg-gray-100 pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 text-cyan-600"
                      }
                    >
                      Dashboard
                    </a>
                  </li>
                </Link>
              </ol>
            </nav>
          </div>
          <p className="flex-1 md:block hidden md:translate-x-28 text-2xl font-bold text-cyan-500 ">
            AccuKnox
          </p>
          <div className="md:flex md:items-center md:gap-12 ">
            <fieldset className="w-full hidden sm:block  space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Link to={`/widgetName/${search}`}>
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-gray-800"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </Link>
                </span>
                <input
                  type="search"
                  list="widgetList"
                  name="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search for widgets"
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none border-2 border-gray-200"
                />
                <datalist id="widgetList">
                  {data.length > 0
                    ? data.map((item, index) => (
                        <option key={index} value={item} />
                      ))
                    : null}
                </datalist>
              </div>
            </fieldset>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white shadow-md"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-cyan-600 shadow-md"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => {
                    setHamMenu(true);
                  }}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hamMenu ? (
        <div className="absolute left-1/2 transform -translate-x-1/2  top-2 w-11/12 h-36 z-30 rounded-md bg-gray-100 ">
          <p
            onClick={() => {
              setHamMenu(false);
            }}
            className="text-end m-2"
          >
            <i className="fa-solid fa-xmark text-cyan-500 font-bold text-xl cursor-pointer"></i>
          </p>

          <p className="text-cyan-500 text-center ">Home</p>

          <p className="text-cyan-500 text-center  ">Dashboard</p>

          <p className="text-cyan-500 text-center  ">Login</p>

          <p className="text-cyan-500 text-center  ">Register</p>
        </div>
      ) : null}
    </header>
  );
}
