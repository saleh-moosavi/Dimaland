import customersData from "../db/customersData.json";
export default function Customers() {
  return (
    <div className="grid grid-cols-12 items-center mx-5 xl:mx-auto max-w-7xl py-10">
      <h2 className="col-span-3 text-3xl font-bold text-blue-500">
        برخی مشتریان ما :
      </h2>
      <ul className="grid grid-cols-6 justify-between gap-x-5 col-span-9 *:rounded-xl *:overflow-hidden">
        {customersData.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={item.src}
                alt="Brand image"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
