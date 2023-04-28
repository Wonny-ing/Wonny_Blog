type Props = {
  title: string;
};

export default function TitleRow({ title }: Props) {
  return (
    <div className='flex items-center gap-4 mb-10'>
      <h2 className='text-3xl font-semibold text-uPrimary'>{title}</h2>
      <div className='bg-uRed flex-1 h-[3px]'></div>
    </div>
  );
}
