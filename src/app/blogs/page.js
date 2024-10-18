import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blogs/self-hosting" className="text-2xl font-bold text-sky-400	">
            Self-hosting
          </Link>
        </li>
      </ul>
    </div>
  );
}
