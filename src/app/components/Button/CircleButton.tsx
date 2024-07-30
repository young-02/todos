export default function CircleButton({
  onClick,
  Icon,
}: {
  className?: string;
  onClick: () => void;
  Icon: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`group-hover:block hidden bg-gray-100 p-1 w-[15%] text-center cursor-pointer  hover:bg-indigo-400 hover:text-white `}
    >
      {Icon}
    </div>
  );
}
