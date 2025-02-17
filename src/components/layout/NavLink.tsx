import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

interface NavLinkProps {
	href: string
	children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
	return (
		<ChakraLink
			asChild
			textDecoration='none'
			color='black'
			_hover={{ color: 'blue.500' }}
			outline='none'
		>
			<NextLink href={href}>{children}</NextLink>
		</ChakraLink>
	)
}

export default NavLink
