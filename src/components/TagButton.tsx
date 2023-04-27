type TagProps = {
  title: string;
  color: string;
};

type Props = {
  tag: TagProps;
};

export default function TagButton({ tag }: Props) {
  const { title, color } = tag;

  return (
    <li
      className={`flex justify-center items-center gap-2 text-lg bg-uWhite px-2 py-1 shadow-md cursor-pointer transition-all hover:-translate-y-1 hover:${color}`}
    >
      <span className={`${color}`}>#</span>
      <span className='text-uPrimary group-hover:${color}'>{title}</span>
    </li>
  );
}
