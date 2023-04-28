type Props = {
  textSize?: string;
};
export default function Title({ textSize = 'text-6xl' }: Props) {
  return (
    <div className={`${textSize} font-bold`}>
      <span className='text-uRed'>W</span>
      <span>onny</span>
    </div>
  );
}
