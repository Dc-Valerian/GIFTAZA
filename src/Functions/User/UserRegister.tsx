import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../GlobalStore/ReduxState";
import { createUser } from "../../API/User/UserEndpoints";
import { useState } from "react";
import Swal from "sweetalert2";
export const useUserRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const schema: any = yup
    .object({
      email: yup.string().required("Please input an email"),
      name: yup.string().required("Enter your name"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  }: any = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const postData = useMutation({
    mutationKey: [""],
    mutationFn: createUser,
    onSuccess: (data: any) => {
      Swal.fire({
        title:
          "This business will create a profile for you to continue purchasing and have access to more",
      });
      dispatch(login(data?.data));
      toast.success("Check Email to continue!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.success("Redirecting To Email for Info!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(true);

      setTimeout(() => {
        // End the loading state
        setIsLoading(false);
      }, 2000);
      setTimeout(() => {}, 2000);
      reset();
    },

    // If an error occured:
    onError: (error: any) => {
      console.log("error", error);
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
      } else {
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
      console.log("postdata", data);
    })();
  };
  const loading = (postData as any).isLoading;

  return { register, loading, Submit, errors, postData, isLoading };
};
