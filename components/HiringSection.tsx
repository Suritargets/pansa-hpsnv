import Image from "next/image";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

export default function HiringSection() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <a
          href="https://recruit.hpsnv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={`${BASE}/portal-1024x731.png`}
            alt="We're Hiring — Join Our Team — recruit.hpsnv.com"
            width={1024}
            height={731}
            className="w-full h-auto"
          />
        </a>
      </div>
    </section>
  );
}
