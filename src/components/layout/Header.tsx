'use client'
import logo from '@/assets/images/logo.svg'
import { Box, Button, HStack } from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/service', label: 'Service' },
	{ href: '/pricing', label: 'Pricing' },
	{ href: '/contact', label: 'Contact' },
]

const Header = () => {
	return (
		<Box
			as='header'
			h='20'
			boxShadow='md'
			position='sticky'
			top='0'
			left='0'
			right='0'
			zIndex='1000'
			bg='white'
		>
			<Box
				h='full'
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				maxW='1320px'
				px={4}
				mx='auto'
			>
				<Box>
					<Link href='/'>
						<NextImage src={logo} alt='logo' />
					</Link>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					gap={20}
				>
					<HStack
						gap={10}
						display={{
							base: 'none',
							lg: 'flex',
						}}
					>
						{navLinks.map((link) => (
							<NavLink key={link.href} href={link.href}>
								{link.label}
							</NavLink>
						))}
					</HStack>
					<Box>
						<Button
							size={{
								base: 'sm',
								lg: 'lg',
							}}
						>
							Get a Quote
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
