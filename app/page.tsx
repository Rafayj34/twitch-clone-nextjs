import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
export default function Home() {
  return (
    <div className='flex flex-col gap-y-4'>
      <h1>User Dashboard</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
    )
}
