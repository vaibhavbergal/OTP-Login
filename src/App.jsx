import OtpLoginForm from "./components/OtpLoginForm.jsx";

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-500">
        <div className="flex flex-col items-center w-full max-w-md gap-8 pt-5 mt-24 shadow-lg h-52 bg-zinc-300 rounded-2xl ">
          <h1 className="text-2xl font-medium ">Login with Phone</h1>
          <OtpLoginForm />
        </div>
      </div>
    </>
  );
}

export default App;
