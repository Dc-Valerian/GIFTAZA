// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export const useOtp = () => {
//   const [otp, setOtp] = useState("");

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const verifyotp = () => {
//     setLoading(true);

//     UserOTPVerification(otp)
//       .then(() => {
//         toast.success("OTP Verified successfully!", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         toast.success("Redirecting to Login!", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });

//         setTimeout(() => {
//           navigate("/log-in");
//         }, 4000);
//         setOtp("");
//       })
//       .catch((err) => {
//         // The API call fails. Show error message.
//         if (err.message === "Network Error") {
//           toast.error(err.message, {
//             position: "top-right",
//             autoClose: 8000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//         } else {
//           toast.error(`${err?.response?.data?.message}`, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const getUserID = useAppSelector((user) => user?.AllUsers);

//   const resendOTP = () => {
//     ResendOTPVerification(getUserID!).then(() => {
//       toast.success("Check your email for New OTP!", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     });
//   };

//   return { resendOTP, loading, verifyotp, setOtp, otp };
// };
