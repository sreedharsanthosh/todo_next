const Homeform = ({ onChange, ...props }) => {
  return (
    <div className="w-full md:w-3/5 bg-red-500 px-4 py-6 rounded-lg">
      <form {...props} className="flex justify-around">
        <input
          className="w-3/4 md:w-4/5 rounded-md p-4 h-11"
          type="text"
          required
          onChange={onChange}
        />
        <button
          className="px-4 md:px-10 md:text-xl py-2 bg-white rounded-md "
          type="submit"
        >
          New
        </button>
      </form>
    </div>
  );
};

export default Homeform;
