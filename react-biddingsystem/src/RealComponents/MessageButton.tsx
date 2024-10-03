export default function MessageButton({
  toggleUserMessages,
}: {
  toggleUserMessages: () => void;
}) {
  return (
    <div
      className="flex justify-center items-center mr-[350px]"
      onClick={toggleUserMessages}
    >
      <img
        src="https://pngimg.com/uploads/bell/bell_PNG53567.png"
        alt=""
        className="w-[30px] h-[30px]"
      />
    </div>
  );
}
