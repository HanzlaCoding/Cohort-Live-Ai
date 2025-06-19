import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ getTask }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    getTask(data.title);
    reset();
    toast.success("Task Created Successfully");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Create your Task</h1>

      <form className="mb-5" onSubmit={handleSubmit(submitHandler)}>
        <input
          // Add 'required' validation rule with a custom message
          {...register("title", { required: "Task name is required!" })}
          className="outline-none bg-zinc-700 rounded-t-xs py-1 px-2 border-zinc-400 border-b-[1px]"
          type="text"
          placeholder="Task Name"
        />

        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <br />
        <br />

        <button
          type="submit" // Crucial: Set type="submit" to trigger form submission
          className="cursor-pointer bg-blue-600 text-white font-bold py-1 px-5 rounded"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Create;