"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement} from 'react';


export default function Header():ReactElement {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/user/profile" style={{ fontWeight: pathname === "/user/profile" ? "bold" : "normal" }}>
        Profile
      </Link>
      {" | "}
      <Link href="/user/setting" style={{ fontWeight: pathname === "/user/setting" ? "bold" : "normal" }}>
        Setting
      </Link>
      {" | "}
      <Link href="/user/history" style={{ fontWeight: pathname === "/user/history" ? "bold" : "normal" }}>
        History
      </Link>
    </nav>
  );
}
