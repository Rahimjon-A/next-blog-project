'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2 } from 'lucide-react'
import React, { useState } from 'react'

const Footer = () => {
	const [focus, setFocus] = useState(false)
	return (
		<footer className=' flex-center mx-auto flex-col container max-w-4xl space-y-12 p-24'>
			<h1 className='text-5xl font-createRound text-center'>
				Get latest Blogs delivered right to your inbox
			</h1>
			<div className='grid max-md:grid-cols-1 w-full md:gap-4 grid-cols-3'>
				<Input
					className=' col-span-2 w-full'
					placeholder='Your Email Adresss'
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
				<Button
					className='max-md:mt-2'
					size={'lg'}
					variant={focus ? 'default' : 'outline'}
				>
					<User2 />
					<span>Join Today</span>
				</Button>
			</div>
		</footer>
	)
}

export default Footer
