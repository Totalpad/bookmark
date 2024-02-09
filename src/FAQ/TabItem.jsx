function TabItem({ title }) {
  return (
    <div className="group border-b py-1 outline-none" tabIndex={1}>
      <div className=" group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500 ease-in-out">
        {/* Title */}
        <div className=" transition duration-500 ease-in-out group-hover:text-red-500">
          {title}
        </div>
        {/* arrow */}
        <div className="transition duration-500 ease-in-out group-focus:-rotate-180 group-focus:text-red-500">
          <svg width="18" height="12" className="">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      {/* Tab inner text */}
      <div className="max-h-0  overflow-hidden transition duration-500 ease-in-out group-focus:max-h-screen">
        <p className=" py-2 text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          repellat amet doloribus consequuntur eos similique provident tempora
          voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae
          delectus id suscipit labore?
        </p>
      </div>
    </div>
  );
}

export default TabItem;
