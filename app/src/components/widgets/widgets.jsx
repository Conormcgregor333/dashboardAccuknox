import "../../App.css";
import {
  useGetWidgetsQuery,
  useDeleteWidgetMutation,
  useAddWidgetMutation,
} from "../../api/apiSlice";
import { useState } from "react";
import { format } from "date-fns";
import { parseISO } from "date-fns";
export default function Widgets() {
  let [widgetPopup, setWidgetPopUp] = useState(false);
  let [widgetType, setWidgetType] = useState("");

  /* ------------------------------------------adding widgets logic------------------------------------------------------ */
  let [AddWidget] = useAddWidgetMutation();
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  function getSuffix(day) {
    if (day > 3 && day < 21) return "th"; // for 4th-20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  function AddDate() {
    const currentDate = new Date();
    const now = format(currentDate, "yyyy-MM-dd");
    const date = parseISO(now);
    const day = format(date, "d");
    const monthAndYear = format(date, "MMMM, yyyy");
    const suffix = getSuffix(parseInt(day, 10));
    return `${day}${suffix} ${monthAndYear}`;
  }
  function handleClick(e) {
    e.preventDefault();
    AddWidget({
      id: `${Widgets.length + 1}`,
      widgetCategory: widgetType,
      widgetTitle: title,
      widgetText: text,
      dateCreated: AddDate(),
    });
    setWidgetPopUp(false);
    setText("");
    setTitle("");
  }

  /* --------------------------------------------------------------------------------------------------------------------- */
  const {
    data: Widgets,
    isSuccess,
    sError,
    isLoading,
    error,
  } = useGetWidgetsQuery();
  const [deleteWidget] = useDeleteWidgetMutation();
  let content1 = <p></p>;
  let content2 = <p></p>;
  let content3 = <p></p>;

  if (isLoading) {
    content1 = <p>Loading....</p>;
    content2 = <p>Loading....</p>;
    content3 = <p>Loading....</p>;
  } else if (isSuccess) {
    content1 = (
      <>
        {Widgets.map((index) => {
          if (index.widgetCategory === "CSPM") {
            return (
              <div className="w-72 relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 mr-10">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {index.widgetTitle}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {index.widgetCategory}
                    </p>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt=""
                      src="https://th.bing.com/th/id/R.92a316c8e347760384bc29d9a061e37f?rik=yec87%2fuUyNxNUQ&riu=http%3a%2f%2fwww.engineeringintro.com%2fwp-content%2fuploads%2f2012%2f04%2fBar-Graph1.png&ehk=fAoooM1tHXhW87DViZdygA1b%2bn%2blmZsiZGqhqOWpoa8%3d&risl=&pid=ImgRaw&r=0"
                      className="size-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {index.widgetText}
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Added on
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.dateCreated}
                    </dd>
                  </div>

                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Category
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.widgetCategory}
                    </dd>
                  </div>
                </dl>
                <p
                  onClick={() => {
                    deleteWidget({ id: index.id });
                  }}
                  className="text-red-500 text-end mt-1 text-xs cursor-pointer"
                >
                  remove?
                </p>
              </div>
            );
          }
        })}
      </>
    );
    content2 = (
      <>
        {Widgets.map((index) => {
          if (index.widgetCategory === "CSDP") {
            return (
              <div className="w-72 relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 mr-10">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {index.widgetTitle}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {index.widgetCategory}
                    </p>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt=""
                      src="https://th.bing.com/th/id/R.92a316c8e347760384bc29d9a061e37f?rik=yec87%2fuUyNxNUQ&riu=http%3a%2f%2fwww.engineeringintro.com%2fwp-content%2fuploads%2f2012%2f04%2fBar-Graph1.png&ehk=fAoooM1tHXhW87DViZdygA1b%2bn%2blmZsiZGqhqOWpoa8%3d&risl=&pid=ImgRaw&r=0"
                      className="size-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {index.widgetText}
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Added on
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.dateCreated}
                    </dd>
                  </div>

                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Category
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.widgetCategory}
                    </dd>
                  </div>
                </dl>
                <p
                  onClick={() => {
                    deleteWidget({ id: index.id });
                  }}
                  className="text-red-500 text-end mt-1 text-xs cursor-pointer"
                >
                  remove?
                </p>
              </div>
            );
          }
        })}
      </>
    );
    content3 = (
      <>
        {Widgets.map((index) => {
          if (index.widgetCategory === "CWPP") {
            return (
              <div className="w-72 relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 mr-10">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {index.widgetTitle}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {index.widgetCategory}
                    </p>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt=""
                      src="https://th.bing.com/th/id/R.92a316c8e347760384bc29d9a061e37f?rik=yec87%2fuUyNxNUQ&riu=http%3a%2f%2fwww.engineeringintro.com%2fwp-content%2fuploads%2f2012%2f04%2fBar-Graph1.png&ehk=fAoooM1tHXhW87DViZdygA1b%2bn%2blmZsiZGqhqOWpoa8%3d&risl=&pid=ImgRaw&r=0"
                      className="size-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {index.widgetText}
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Added on
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.dateCreated}
                    </dd>
                  </div>

                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">
                      Category
                    </dt>
                    <dd className="text-xs text-gray-500">
                      {index.widgetCategory}
                    </dd>
                  </div>
                </dl>
                <p
                  onClick={() => {
                    deleteWidget({ id: index.id });
                  }}
                  className="text-red-500 text-end mt-1 text-xs cursor-pointer"
                >
                  remove?
                </p>
              </div>
            );
          }
        })}
      </>
    );
  } else {
    content1 = <p>{error.message}</p>;
    content2 = <p>{error.message}</p>;
    content3 = <p>{error.message}</p>;
  }
  return (
    <div className="relative">
      <p className="font-bold mt-6 w-11/12 mx-auto mb-2">
        CSPM Executive Dashboard
      </p>
      <div className="w-11/12 mx-auto flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {content1}

          <a
            onClick={() => {
              setWidgetPopUp(true);
              setWidgetType("CSPM");
            }}
            className="w-72 relative flex justify-center items-center overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 cursor-pointer"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <p className="text-gray-500">Add Widget +</p>
          </a>
        </div>
      </div>

      {/* -------------------------------------------------widget category 2 --------------------------------------------*/}
      <p className="font-bold mt-6 w-11/12 mx-auto mb-2">
        CSDP Marketing Dashboard
      </p>
      <div className="w-11/12 mx-auto flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {content2}
          <a
            onClick={() => {
              setWidgetPopUp(true);
              setWidgetType("CSDP");
            }}
            className="w-72 relative flex justify-center items-center overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 cursor-pointer"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <p className="text-gray-500">Add Widget +</p>
          </a>
        </div>
      </div>
      {/* --------------------------------------------------------category 3------------------------------------------------------ */}
      <p className="font-bold mt-6 w-11/12 mx-auto mb-2">
        CWPP Sales Dashboard
      </p>
      <div className="w-11/12 mx-auto flex overflow-x-scroll no-scrollbar mb-10">
        <div className="flex">
          {content3}
          <a
            onClick={() => {
              setWidgetPopUp(true);
              setWidgetType("CWPP");
            }}
            className="w-72 relative flex justify-center items-center overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 cursor-pointer"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <p className="text-gray-500">Add Widget +</p>
          </a>
        </div>
      </div>
      {widgetPopup ? (
        <div
          className="absolute 2xl:w-1/2 xl:w-1/2 md:w-10/12 w-11/12 left-1/2 transform -translate-x-1/2 top-0 rounded-2xl border border-blue-100 bg-gray-100 p-4 shadow-lg sm:p-6 lg:p-8"
          role="alert"
        >
          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-cyan-500 p-2 text-white">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fillRule="evenodd"
                />
              </svg>
            </span>

            <p className="font-medium sm:text-lg">AddWidget</p>
          </div>
          <p className="mt-2 text-gray-500">
            Add the widget to the selected category i.e{" "}
            <span className="font-bold text-cyan-500">{widgetType}</span>.Widget
            will be added for this category. Please make sure to fill all the
            fields.
          </p>
          <form
            onSubmit={(e) => {
              handleClick(e);
            }}
          >
            <p className="mt-2 text-gray-500">Widget Title</p>
            <input
              type="text"
              placeholder="type title.."
              required={true}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border-2 border-gray-500 w-11/12 block rounded-md mx-auto mt-2 p-1"
            />
            <p className="mt-2 text-gray-500">Widget Text</p>
            <textarea
              value={text}
              required={true}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className=" p-1 w-11/12 block mx-auto h-32 border-2 border-gray-500 mt-2  rounded-md"
              placeholder="Type your text here..."
            />

            <div className="mt-6 sm:flex sm:gap-4">
              <a
                onClick={() => {
                  setWidgetPopUp(false);
                }}
                className="m-1 mt-2 inline-block w-full rounded-lg bg-gray-300 px-5 py-3 text-center text-sm font-semibold text-red-500 sm:mt-0 sm:w-auto cursor-pointer"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="m-1 inline-block w-full rounded-lg bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto cursor-pointer"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
