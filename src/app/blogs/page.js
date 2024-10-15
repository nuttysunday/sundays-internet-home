import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div className="p-4">
      <ul>
        <li>
          <Link href="/blogs/blog1" className="text-2xl font-bold underline decoration-sky-500">
            Blog 1
          </Link>
        </li>
      </ul>
    </div>
  );
}
