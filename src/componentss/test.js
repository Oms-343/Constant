// export default function Card({ data }) {
//     const location = useLocation();
//     return (
//       <>
//         {data.map((val) => (
//           <div
//             key=""
//             className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//           >
//             <div className=" flex flex-1 justify-center min-w-0">
//               <Link
//                 to="habit-details"
//                 state={{ background: "/home" }}
//                 className="focus:outline-none"
//               >
//                 <p className="text-sm font-medium text-gray-900">{val}</p>
//               </Link>
//             </div>
//           </div>
//         ))}

//         <Outlet />
//       </>
//     );
//   }

// import { Link, Outlet, useLocation } from "react-router-dom";

// export default function Card({ data }) {
//   const location = useLocation();

//   if (location.pathname === "/modal")
//     return (
//       <>
//         {data.map((val) => (
//           <div
//             key=""
//             className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//           >
//             <div className=" flex flex-1 justify-center min-w-0">
//               <Link
//                 to="habit-details"
//                 state={{ background: "/home" }}
//                 className="focus:outline-none"
//               >
//                 <p className="text-sm font-medium text-gray-900">{val}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   else if (location.pathname === "/modal/habit-details") return <Outlet />;
// }
