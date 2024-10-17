import { Badge } from '@/components/ui/badge'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GlobalSearch = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<div className=' hover:bg-blue-400/20 py-2 px-3 cursor-pointer transition-colors  rounded-sm flex items-center gap-1'>
					<span className=' hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className=' container max-w-6xl mx-auto py-12'>
					<Input className=' bg-secondary' placeholder='Search for a blog' />
					<div className='flex flex-col space-y-2 mt-4'>
						<p className='text-2xl font-createRound'>Categories</p>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(categ => (
								<Link href={categ.slug} key={categ.slug}>
									<Badge variant={'secondary'}> {categ.name}</Badge>
								</Link>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<p className='text-2xl font-createRound'>Technologies</p>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(categ => (
								<Link href={categ.slug} key={categ.slug}>
									<Badge variant={'secondary'}> {categ.name}</Badge>
								</Link>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
