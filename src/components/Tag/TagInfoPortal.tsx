import KVPortal from '../KVPortal';

export default function TagInfoPortal() {
  return (
    <KVPortal>
      <section className='w-full'>
        <div className='w-1/3 bg-black'></div>
        <div className='w-2/3'>
          <p>
            Sometimes you might want to put your site behind closed doors If
            you’ve got a publication that you don’t want the world to see yet
            because it’s not ready to launch, you can hide your Ghost site
            behind a simple shared pass-phrase.
          </p>
        </div>
      </section>
    </KVPortal>
  );
}
