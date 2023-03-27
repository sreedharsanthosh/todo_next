import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <ReactLoading type="balls" color="white" height={"20%"} width={"20%"} />
    </div>
  );
};

export default Loading;
