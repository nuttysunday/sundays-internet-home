import Link from "next/link";

export default function BlogsPage() {
  return (
    <div>
      <ul style={{ display: "flex", flexDirection:"column", gap:'1.5rem'}}>
      <li>
          <Link
            href="/blogs/cool-kubernetes"
            className="text-orange-400"
          >
            <div>
              {" "}
              <p className={`text-2xl font-bold underline decoration-4`}>Cool kubernetes</p>
              <p className={`italic opacity-90 text-sm `}>20th Nov 2024, 8 min read</p>
            </div>
          </Link>
        </li>
      <li>
          <Link
            href="/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling"
            className="text-sky-400"
          >
            <div>
              {" "}
              <p className={`text-2xl font-bold underline decoration-4`}>Ping-Pong ball tracking and projected distance calculation system for data modeling</p>
              <p className={`italic opacity-90 text-sm `}>28th Oct 2024, 5 min read</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/self-hosting"
            className="text-pink-400"
          >
            <div>
              {" "}
              <p className={`text-2xl font-bold underline decoration-4`}>Self-hosting</p>
              <p className={`italic opacity-90 text-sm `}>18th Oct 2024, 6 min read</p>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/blogs/certi-tester-web-app"
            className="text-teal-400"
          >
            <div>
              {" "}
              <p className={`text-2xl font-bold underline decoration-4`}>Certi Tester web app</p>
              <p className={`italic opacity-90 text-sm `}>Coming mid Jan 2025</p>
            </div>
          </Link>
        </li>
       
      </ul>
    </div>
  );
}

//https://shivam.foo/blogs/ping-pong-ball-tracking-system
//https://shivam.foo/blogs/