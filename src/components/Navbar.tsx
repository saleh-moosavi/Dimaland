import { BiSearch } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header>
      <section className="bg-blue-600 flex justify-center items-center gap-x-5 py-3">
        <p className="text-xs text-white font-semibold">
          برای دیدن آخرین اخبار و به روزرسانی های محصولات ما ، به کانال ما
          بپیوندید!
        </p>
        <button
          type="button"
          className="bg-yellow-400 px-5 py-2 text-xs font-semibold rounded-lg"
        >
          پیشنهاد ویژه
        </button>
      </section>
      <nav className="flex justify-between items-center mx-20 my-5" dir="rtl">
        <article className="flex items-center justify-center gap-x-5">
          <ul className="flex items-center gap-x-10 font-semibold *:cursor-pointer hover:*:text-blue-600 *:transition-all *:duration-300">
            <li>صفحه اصلی</li>
            <li>خدمات</li>
            <li>بلاگ</li>
            <li>تماس با ما</li>
          </ul>
        </article>
        <article className="flex justify-center items-center gap-x-2">
          <button type="button" className="bg-sky-50 p-2 rounded-lg">
            <BiSearch className="size-6" />
          </button>
          <button
            type="button"
            className="bg-sky-50 p-2 rounded-lg flex justify-center gap-x-2"
          >
            0927 557 8965
            <IoCallOutline className="size-6 text-blue-600" />
          </button>
        </article>
      </nav>
    </header>
  );
}
