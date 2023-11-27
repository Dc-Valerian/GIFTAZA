import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LoginBusiness } from "../../API/Business/BusinessEndpoints";
import { login, access } from "../../GlobalStore/ReduxState";
import { useState } from "react";

export const useBusinessLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);

  const schema: any = yup
    .object({
      email: yup.string().required("Please Enter your email"),
      password: yup.string().required("Please Enter your password"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  }: any = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = useMutation({
    mutationKey: [""],
    mutationFn: LoginBusiness,

    onSuccess: (data) => {
      dispatch(login(data));

      toast.success("Successfully Sign In!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.success("Redirecting To DashBoard!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/business-dashboard");
        dispatch(access(true));
      }, 2000);

      reset();
    },

    onError: (error: any) => {
      console.log("da", error);
      if (error.message === "Network Error") {
        toast.error("Network error!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(access(false));
      } else {
        dispatch(access(null));
        setTimeout(() => {
          toast.error(`${error?.response?.data?.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }, 1000);
      }
    },
  });

  const Submit = (event: any) => {
    event?.preventDefault();
    handleSubmit((data: any) => {
      postData.mutate(data);
      console.log("post data", data);
    })();
  };

  return { register, Submit, errors, postData, isLoading };
};
