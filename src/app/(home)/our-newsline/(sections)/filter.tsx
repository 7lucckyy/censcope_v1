export default function Filter() {
  return (
    <div className="w-full flex flex-col gap-4 bg-white py-10 px-5% lg:px-15%">
      <div className="w-full p-6 px-5% rounded-md bg-cyan-600/10 flex gap-2 flex-col items-center">
        <h3 className="text-lg font-titillium">Refine your search:</h3>

        <div className="w-full grid grid-cols-fit-16 gap-6">
          <select className="bg-white rounded py-2 border border-gray-100 outline-gray-100"></select>
          <select className="bg-white rounded py-2 border border-gray-100 outline-gray-100"></select>
          <select className="bg-white rounded py-2 border border-gray-100 outline-gray-100"></select>
          <select className="bg-white rounded py-2 border border-gray-100 outline-gray-100"></select>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-between w-full">
        <b className="">75 news</b>
        <select className="w-60 py-2 rounded-md bg-white border border-gray-200 outline-gray-200">
          <option hidden>Sort by</option>
          <option value="created_at">Sort from most recent to oldest</option>
          <option value="-created_at">Sort from oldest to most recent</option>
        </select>
      </div>
    </div>
  );
}
