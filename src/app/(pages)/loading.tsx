import LoadingSpinner from "../../components/global/Loading";

const Loading = () => {
  return (
    <div className="-mt-8 h-screen">
      <div className="h-full w-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default Loading;
