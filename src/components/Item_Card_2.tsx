interface Props {
  data: string;
}

export default function Item_Card_2({ data }: Props) {
  return (
      <h1 className="hover:skew-y-1 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-blue-500 p-2 text-white text-center rounded-md shadow-md">
        {data}
      </h1>
    
  );
}
