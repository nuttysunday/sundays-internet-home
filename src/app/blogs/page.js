import Link from "next/link";

export default function BlogsPage() {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}
