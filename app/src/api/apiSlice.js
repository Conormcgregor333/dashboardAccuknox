import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3600/widgetData",
  }),
  tagTypes: ["Widgets"],
  endpoints: (builder) => ({
    getWidgets: builder.query({
      query: () => "",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Widgets"],
    }),
    addWidget: builder.mutation({
      query: (widget) => ({
        url: "",
        method: "POST",
        body: widget,
      }),
      invalidatesTags: ["Widgets"],
    }),
    deleteWidget: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Widgets"],
    }),
  }),
});
export const {
  useGetWidgetsQuery,
  useAddWidgetMutation,
  useDeleteWidgetMutation,
} = apiSlice;
