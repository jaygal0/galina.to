import LoadingSpinner from "../components/global/Loading";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    </>
  );
};

export default Loading;
