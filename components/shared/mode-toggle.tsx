'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ModeToggle = () => {
	const [mout, setMout] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMout(true), [])
	return mout && resolvedTheme === 'dark' ? (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	) : (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
			<Moon />
		</Button>
	)
}

export default ModeToggle
