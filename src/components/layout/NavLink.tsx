import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
	href: string
	children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<ChakraLink
			asChild
			textDecoration='none'
			color={isActive ? 'blue.600' : 'black'}
			_hover={{ color: 'blue.700' }}
			fontWeight={500}
			outline='none'
		>
			<NextLink href={href}>{children}</NextLink>
		</ChakraLink>
	)
}

export default NavLink
