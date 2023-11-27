import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../GlobalStore/ReduxState";
import { RegisterBusiness } from "../../API/Business/BusinessEndpoints";

export const useBusinessRegistration = () => {
  const schema: any = yup
    .object({
      companyName: yup.string().required("Business Name is required"),
      phoneNumber: yup.string(),
      email: yup.string().required("Please input an email"),
      password: yup.string().required("Enter a strong password"),
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = useMutation({
    mutationKey: [""],
    mutationFn: RegisterBusiness,
    onSuccess: (data: any) => {
      dispatch(login(data?.data));
      toast.success("Business Account Created Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.success("Redirecting To Email for OTP!", {
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
        navigate("/otp_vertification");
      }, 2000);
      reset();
    },

    // If an error occured:
    onError: (error: any) => {
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
    })();
  };
  const loading = (postData as any).isLoading;

  return { register, loading, Submit, errors, postData };
};