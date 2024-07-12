import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'A description of all the services we offer clients',
}

export default async function Services() {

  return (
    <SimpleLayout
      title="Services we offer"
      intro="coming soon"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
        </div>
      </div>
    </SimpleLayout>
  )
}
