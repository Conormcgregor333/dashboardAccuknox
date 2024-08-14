import Navbar from "../components/navbar";
import Widgets from "../components/widgets/widgets";
import "../App.css";
import { format } from "date-fns";
import { parseISO } from "date-fns";
import {
  useGetWidgetsQuery,
  useDeleteWidgetMutation,
  useAddWidgetMutation,
} from "../api/apiSlice";
import { useState } from "react";
export default function Dashboard() {
  let [showWidgetMenu, setShowWidgetMenu] = useState(false);
  let [Widgettype, setWidgetType] = useState("CSPM");
  let [showForm, setShowForm] = useState(false);
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  const {
    data: Widget,
    isSuccess,
    sError,
    isLoading,
    error,
  } = useGetWidgetsQuery();
  let [addWid] = useAddWidgetMutation();
  let [deleteWid] = useDeleteWidgetMutation();

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
  function handleSubmit(e) {
    e.preventDefault();
    addWid({
      id: `${Widget.length + 1}`,
      widgetCategory: Widgettype,
      widgetTitle: title,
      widgetText: text,
      dateCreated: AddDate(),
    });

    setText("");
    setTitle("");
    setShowForm(false);
  }
  let content = <p></p>;
  function handleCheck(index) {
    deleteWid({ id: index });
  }
  if (isLoading) {
    content = <p></p>;
  } else if (isSuccess) {
    content = (
      <div>
        {Widget.map((index) => {
          if (index.widgetCategory === Widgettype) {
            return (
              <div className="border-2 border-gray-700 rounded-sm mt-2 w-11/12 mx-auto flex p-1">
                <input
                  onChange={() => {
                    handleCheck(index.id);
                  }}
                  type="checkbox"
                  className="mx-2"
                />
                <p className="font-bold text-sm">{index.widgetTitle}</p>
              </div>
            );
          }
        })}
        {showForm ? (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="rounded-sm mt-2 w-11/12 mx-auto block border-2 border-gray-600 h-auto p-1"
          >
            <p className="text-center mt-1 font-bold">Title</p>
            <input
              type="text"
              required={true}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="mt-1 w-11/12 mx-auto block border-gray-600 border-2 rounded-sm"
            />
            <p className="text-center mt-1 font-bold">Text</p>
            <textarea
              required={true}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className=" p-1 w-11/12 block mx-auto h-32 border-2 border-gray-600 mt-1  rounded-sm"
              placeholder="Type your text here..."
            />
            <button
              type="submit"
              className="w-20 h-8 bg-cyan-600 mt-1 mb-1 mx-auto block rounded-sm text-white font-bold"
            >
              Add
            </button>
          </form>
        ) : null}
        <div
          onClick={() => {
            setShowForm(true);
          }}
          className="bg-cyan-600 rounded-sm mt-2 w-11/12 mx-auto flex p-1 cursor-pointer shadow-md"
        >
          <p className="font-bold text-center w-full mx-auto text-white">
            Add +
          </p>
        </div>
      </div>
    );
  } else {
    content = <p>{error.message}</p>;
  }
  return (
    <div className="relative max-width">
      <div className="flex w-11/12 mx-auto mt-10 justify-between items-center">
        <p className="font-bold text-xl">CNAP Dashboard</p>
        <a
          className="rounded-md border-2 border-gray-200 px-1 sm:px-5 py-2.5 text-sm font-medium text-gray-500 "
          href="#"
          onClick={() => {
            setShowWidgetMenu(true);
          }}
        >
          Add Widget +
        </a>
      </div>
      {showWidgetMenu ? (
        <div className="absolute w-80 bg-white z-30 top right-0 widgetAnimation">
          <div className="bg-cyan-600 flex justify-between p-2">
            <p className="font-bold text-white">Add Widget</p>
            <i
              onClick={() => {
                setShowWidgetMenu(false);
              }}
              className="fa-solid fa-xmark text-white font-bold text-xl cursor-pointer"
            ></i>
          </div>
          <div className="flex items-center justify-center mt-2  text-gray-500">
            <a
              rel="noopener noreferrer"
              onClick={() => {
                setWidgetType("CSPM");
              }}
              className={
                Widgettype === "CSPM"
                  ? "px-5 py-1 border-b-2 border-cyan-500 text-cyan-500 cursor-pointer"
                  : "px-5 py-1 border-b-2 border-gray-700 cursor-pointer"
              }
            >
              CSPM
            </a>
            <a
              rel="noopener noreferrer"
              onClick={() => {
                setWidgetType("CSDP");
              }}
              className={
                Widgettype === "CSDP"
                  ? "px-5 py-1 border-b-2 border-cyan-500 text-cyan-500 cursor-pointer"
                  : "px-5 py-1 border-b-2 border-gray-700 cursor-pointer"
              }
            >
              CSDP
            </a>
            <a
              rel="noopener noreferrer"
              onClick={() => {
                setWidgetType("CWPP");
              }}
              className={
                Widgettype === "CWPP"
                  ? "px-5 py-1 border-b-2 border-cyan-500 text-cyan-500 cursor-pointer"
                  : "px-5 py-1 border-b-2 border-gray-700 cursor-pointer"
              }
            >
              CWPP
            </a>
          </div>
          {/*  <div className="border-2 border-gray-700 rounded-sm mt-2 w-11/12 mx-auto flex p-1">
            <input type="checkbox" className="mx-2" />
            <p className="font-bold text-sm">Title</p>
          </div> */}
          {content}
          <div className="flex  absolute bottom-4 right-0 ">
            <a
              onClick={() => {
                setShowWidgetMenu(false);
              }}
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-cyan-600 mx-2 "
              href="#"
            >
              Cancel
            </a>

            <a
              onClick={() => {
                setShowWidgetMenu(false);
              }}
              className="rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white mx-2"
              href="#"
            >
              Confirm
            </a>
          </div>
        </div>
      ) : null}
      <Widgets />
    </div>
  );
}
