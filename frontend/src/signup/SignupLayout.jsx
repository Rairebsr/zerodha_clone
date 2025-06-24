const SignupLayout = ({ step, title, children }) => {
  return (
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-1">Step {step} of 5</p>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="h-2 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>
      {children}
    </div>
  );
};
export default SignupLayout;