"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Checkin = () => {
  const router = useRouter();
  return (
    <main>
      <div className="flex justify-between mt-4 ms-4">
        <span className="text-4xl">Hello User</span>
        <Image
          src="/assests/user.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>

      <div className="flex flex-col gap-8 m-6">
        <div>
          <h1 className="text-gray">id</h1>
          <h1 className="font-bold">02113112312</h1>
        </div>

        <div>
          <h1 className="text-gray">Course</h1>
          <h1 className="font-bold">Web and App Development</h1>
        </div>

        <div>
          <h1 className="text-gray">Check In Time</h1>
          <h1 className="font-bold">-----</h1>
        </div>

        <div>
          <h1 className="text-gray">Check Out Time</h1>
          <h1 className="font-bold">-----</h1>
        </div>
      </div>

      <div className="ms-[45%] bg-[#5C93FA] w-24 px-4 py-2 rounded-lg">
        <button onClick={() => router.push("Checkout")}>Checkin</button>
      </div>
    </main>
  );
};

export default Checkin;
