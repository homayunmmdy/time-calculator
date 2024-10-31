import Link from "next/link";
import React from "react";

const Home = () => {
  const Languages = [
    {
      id: 1,
      name: "English",
      code: "/en",
    },
    {
      id: 2,
      name: "فارسی",
      code: "/fa",
    }
  ];
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="hero bg-base-200 min-h-screen pt-8">
        <div className="hero-content text-center">
          <div className="flex max-w-md flex-col justify-center">
            <details className="dropdown mx-auto flex max-w-10 items-center justify-center rounded-lg bg-blue-700">
              <summary className="relative m-1 flex">
                <svg
                  className="mt-1 h-5 w-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                  <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
                </svg>
              </summary>
              <ul className="menu dropdown-content rounded-box absolute inset-0 z-[1] mx-auto my-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto rounded-lg bg-gray-800 p-2 shadow">
                {Languages.map((item) => (
                  <div key={item.id}>
                    <Link href={item.code} className="">
                      <li className="rounded-lg p-2 text-white hover:bg-gray-500">
                        {item.name}
                      </li>
                    </Link>
                  </div>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
