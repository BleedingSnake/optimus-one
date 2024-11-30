import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-black border-b border-blue-500 z-[10] py-2">
  <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
    {/* Logo */}
    <Link href="/" className="flex gap-2 items-center">
      <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6 text-red-500" />
      <p className="hidden text-blue-300 text-sm font-medium md:block">Optimus</p>
    </Link>

    {/* Search Bar */}
    <SearchBar />

    {/* Actions */}
    {session?.user ? (
      <UserAccountNav user={session.user} />
    ) : (
      <Link
        href="/sign-in"
        className={buttonVariants({ className: "text-blue-200 bg-red-600 hover:bg-red-700" })}
      >
        Sign In
      </Link>
    )}
  </div>
</div>

  )
}

export default Navbar
