import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blogs/self-hosting" className="text-2xl font-bold underline decoration-sky-500">
            Self-hosting
          </Link>
        </li>
      </ul>
    </div>
  );
}
