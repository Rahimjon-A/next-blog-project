import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLink = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Blogs', route: '/blogs', icon: FileCode2 },
	{ name: 'Archive', route: '/archive', icon: FolderArchive },
	{ name: 'Contact', route: '/contact', icon: Contact2 },
]

export const popularCategories = [
	{ name: 'Front-end', slug: 'front-end' },
	{ name: 'Back-end', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: 'Suniy Intelekt', slug: 'suniy-intelect' },
]

export const popularTags = [
	{ name: 'ReactJS', slug: 'react-js' },
	{ name: 'JavaScript', slug: 'java-script' },
	{ name: 'NextJS', slug: 'next-js' },
	{ name: 'NodeJS', slug: 'node-js' },
]
