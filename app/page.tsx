import Link from "next/link";
import { ReactElement } from 'react';

export default function HomePage():ReactElement {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Navigate to <Link href="/user/profile" style={{ fontWeight:  "bold" }}>User Profile</Link>
      </p>
    </div>
  );
}
