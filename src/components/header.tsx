import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="h-16 border-b p-6 flex items-center gap-3">
      <Button asChild variant={"ghost"} className="font-bold">
        <Link href="/">Home</Link>
      </Button>
      <Button asChild variant={"ghost"} className="font-bold">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </header>
  )
}
