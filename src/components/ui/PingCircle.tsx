export default function PingCircle() {
  return (
    <div className={`absolute top-0 left-3 opacity-70`}>
      <div
        className={`h-2 w-2 rounded-full absolute bg-uSkyBlue animate-ping`}
      />
      <div className={`h-2 w-2 rounded-full absolute bg-uSkyBlue`} />
    </div>
  );
}
