import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>register</title>
      </Helmet>
      
      <form className="w-full md:w-1/2 lg:w-1/3 p-5 border rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center text-3xl md:text-4xl font-bold uppercase">Register</h2>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="border w-full my-4 p-2 rounded-sm" placeholder="Enter name" {...register("name", {required: true, maxLength: 30})} />
        {/* errors will return when field validation fails  */}
        {errors.name && <span className="text-sm text-red-500">This name field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input className="border w-full my-4 p-2 rounded-sm" placeholder="Enter email" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="text-sm text-red-500">This email field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input className="border w-full my-4 p-2 rounded-sm" placeholder="Enter password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span className="text-sm text-red-500">This password field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input className="border w-full my-4 p-2 rounded-sm" placeholder="Enter photo url" {...register("photo", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.photo && <span className="text-sm text-red-500">This photo field is required</span>}

        <input className="bg-green-600 text-white font-semibold w-full py-2 rounded-sm" type="submit" value="Register" />
      </form>
    </div>
  );
}
