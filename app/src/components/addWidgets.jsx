import { useAddWidgetMutation, useGetWidgetsQuery } from "../api/apiSlice";
import { useState } from "react";
import { format } from "date-fns";
import { parseISO } from "date-fns";
export default function AddWidget() {
  let {
    data: Widgets,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetWidgetsQuery();

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
    let now = new Date();
    const date = parseISO(now);
    const day = format(date, "d");
    const monthAndYear = format(date, "MMMM, yyyy");
    const suffix = getSuffix(parseInt(day, 10));
    return `${day}${suffix} ${monthAndYear}`;
  }
  function handleClick() {
    AddWidget({
      id: `${Widgets.length + 1}`,
      widgetCategory: category,
      widgetTitle: title,
      widgetText: text,
      dateCreated: AddDate(),
    });
  }
  return (
    <div>
      <p>Category</p>
      <input
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <p>Title</p>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <p>Text</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add Widget
      </button>
    </div>
  );
}
