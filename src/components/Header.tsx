import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-[#9fc48e]/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ed's Easy Meals Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-[#fec52b] hover:bg-[#e5b327] text-black font-medium" asChild>
              <Link href="/#browse-categories">Browse Recipes</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}