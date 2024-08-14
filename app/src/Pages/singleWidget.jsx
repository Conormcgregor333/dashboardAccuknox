import { useParams } from "react-router-dom";
import { useGetWidgetsQuery } from "../api/apiSlice";
export default function SingleWidget() {
  let { widget } = useParams();
  let {
    data: Wids,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useGetWidgetsQuery();
  let card;
  if (isLoading) {
  } else if (isSuccess) {
    card = Wids.filter((index) => index.widgetTitle === widget);
    console.log(card);
  }

  return (
    <div className="w-72 relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 mx-auto">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {card[0].widgetTitle}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            {card[0].widgetCategory}
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
          {card[0].widgetText}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Added on</dt>
          <dd className="text-xs text-gray-500">{card[0].dateCreated}</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Category</dt>
          <dd className="text-xs text-gray-500">{card[0].widgetCategory}</dd>
        </div>
      </dl>
    </div>
  );
}
