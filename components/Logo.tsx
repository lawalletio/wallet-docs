import Image from "next/image";

export const Logo = () => {
  return (
    <div className='dark:bg-gray-800'>
      <div className='bg-red-600 h-16'>holaaa</div>
      <Image
        className='dark:bg-gray-800 bg-red-500'
        alt='Nomad'
        src='/images/logo.svg'
        width={180}
        height={80}
      />
    </div>
  );
};

export default Logo;
