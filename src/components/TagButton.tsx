type Props = {
  tag: string;
};

const COLORS: Record<string, string> = {
  lifestyle: 'text-uYellow',
  music: 'text-uVelog',
  health: 'text-uFacebook',
  travel: 'text-uTwitter',
  Video: 'text-uInstargram',
};

const GROUP_HOVER_COLORS: Record<string, string> = {
  lifestyle: 'group-hover:text-uYellow',
  music: 'group-hover:text-uVelog',
  health: 'group-hover:text-uFacebook',
  travel: 'group-hover:text-uTwitter',
  Video: 'group-hover:text-uInstargram',
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
