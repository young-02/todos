interface CheckedProps {
  checked: boolean;
  onClick: () => void;
}

const Checkbox = ({ checked, onClick }: CheckedProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex justify-center items-center min-w-5 w-5 h-5 border-4 rounded-full ${
        checked ? "border-indigo-500" : "border-gray-200"
      }`}
    >
      {checked && (
        <span className="flex min-w-2 w-2 h-2 bg-indigo-500 rounded-full" />
      )}
    </div>
  );
};

export default Checkbox;
