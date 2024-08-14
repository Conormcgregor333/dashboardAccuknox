import { useGetWidgetsQuery, useDeleteWidgetMutation } from "../api/apiSlice";
import { useState } from "react";
export default function Widgets() {
  const {
    data: Widgets,
    isSuccess,
    sError,
    isLoading,
    error,
  } = useGetWidgetsQuery();
  const [deleteWidget] = useDeleteWidgetMutation();
  let content = <p>empty</p>;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    content = (
      <div>
        {Widgets.map((index) => {
          return (
            <div key={index.id}>
              <p>{index.widgetCategory}</p>
              <p>{index.widgetTitle}</p>
              <p>{index.widgetText}</p>
              <button
                onClick={() => {
                  deleteWidget({ id: index.id });
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}
