type UserMessagePropsTYpe = {
  messages: string[];
};
export default function UserMessage(data: UserMessagePropsTYpe) {
  if (data.messages.length === 0)
    return (
      <div className="bg-white w-[400px] h-[40px] absolute top-[60px] right-[400px] rounded-lg  shadow-2xl text-center biddingMessageSection">
        No messages
      </div>
    );
  return (
    <div className="bg-white flex flex-col-reverse w-[400px] max-h-[200px] absolute top-[60px] right-[400px] rounded-lg justify-between shadow-2xl text-center overflow-scroll hide-scrollbar biddingMessageSection ">
      {data.messages.map((mess, index) => (
        <span
          key={index}
          className="border-b-[1px] border-[#cfcfcf] p-[10px] font-extralight"
        >
          {mess}
        </span>
      ))}
    </div>
  );
}
