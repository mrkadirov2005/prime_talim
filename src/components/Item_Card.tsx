interface Props {
  heading: string;
  data: string;
}

export default function Item_Card({ heading, data }: Props) {
  return (
    <div className="flex flex-col m-auto p-6 sm:p-8 md:p-10 h-auto sm:h-[200px] items-center justify-around bg-gradient-to-br from-[#6CA6CD] to-[#7B68EE] w-full sm:w-[350px] md:w-[450px] lg:w-[500px] hover:scale-105 transition-transform rounded-md shadow-lg">
      <h1 className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl bg-orange-500 p-2 text-white text-center rounded-md shadow-md">
        {heading}
      </h1>
      <h6 className="w-full text-sm sm:text-base md:text-lg text-center text-white">
        {data}
      </h6>
    </div>
  );
}
