type Props = {
  tag: string;
};

const COLORS: Record<string, string> = {
  javaScript: 'text-uYellow',
  css: 'text-uVelog',
  react: 'text-uFacebook',
  redux: 'text-uTwitter',
  lodash: 'text-uInstargram',
};

const GROUP_HOVER_COLORS: Record<string, string> = {
  javaScript: 'group-hover:text-uYellow',
  css: 'group-hover:text-uVelog',
  react: 'group-hover:text-uFacebook',
  redux: 'group-hover:text-uTwitter',
  lodash: 'group-hover:text-uInstargram',
};

export default function TagButton({ tag }: Props) {
  return (
    <li
      className={`flex justify-center items-center gap-2 text-lg bg-uWhite px-2 py-1 shadow-md cursor-pointer transition-all hover:-translate-y-1 group`}
    >
      <span className={`${COLORS[tag]}`}>#</span>
      <span className={`text-uPrimary ${GROUP_HOVER_COLORS[tag]}`}>{tag}</span>
    </li>
  );
}
