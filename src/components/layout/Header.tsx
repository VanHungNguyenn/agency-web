'use client'
import logo from '@/assets/images/logo.svg'
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from '@/components/ui/menu'
import { Box, Button, HStack, IconButton } from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import NavLink from './NavLink'

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/service', label: 'Service' },
	{ href: '/pricing', label: 'Pricing' },
	{ href: '/contact', label: 'Contact' },
]

const Header = () => {
	const router = useRouter()

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
					gap={{
						base: 4,
						lg: 20,
					}}
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
					<Box
						display={{
							base: 'block',
							lg: 'none',
						}}
					>
						<MenuRoot>
							<MenuTrigger asChild>
								<IconButton aria-label='bars' variant='outline'>
									<FaBars />
								</IconButton>
							</MenuTrigger>
							<MenuContent>
								{navLinks.map((link) => (
									<MenuItem
										key={link.href}
										value={link.href}
										p={4}
										cursor='pointer'
										onClick={() => router.push(link.href)}
										_hover={{
											color: 'blue.600',
										}}
									>
										{link.label}
									</MenuItem>
								))}
							</MenuContent>
						</MenuRoot>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
