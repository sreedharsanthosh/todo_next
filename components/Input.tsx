const Input = ({ label, type, placeholder, ...props }) => {
  return (
    <div className="flex justify-between items-center w-11/12">
      <label htmlFor="password" className="text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-3/4 md:w-4/5 rounded-md p-4 h-11 border-2 border-gray-200"
        {...props}
      />
    </div>
  );
};

export default Input;
