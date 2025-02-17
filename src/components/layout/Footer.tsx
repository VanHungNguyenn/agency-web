import {
	Box,
	Grid,
	GridItem,
	HStack,
	Icon,
	Separator,
	Stack,
	Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa'

const socialLinks = [
	{ href: 'https://www.facebook.com/vanhung.dev', icon: FaFacebook },
	{ href: 'https://www.twitter.com/vanhung.dev', icon: FaTwitter },
	{ href: 'https://www.telegram.com/vanhung.dev', icon: FaTelegram },
]

const footerLinks = [
	{
		title: 'What I Do?',
		links: [
			{ label: 'The Studio', href: '/#' },
			{ label: 'Sponsoring', href: '/#' },
			{ label: 'Newsletter', href: '/#' },
			{ label: 'Contact Us', href: '/#' },
		],
	},
	{
		title: 'News',
		links: [
			{ label: 'Hot Stuff', href: '/#' },
			{ label: 'Perfect Place', href: '/#' },
			{ label: 'Vintage', href: '/#' },
			{ label: 'Products', href: '/#' },
		],
	},
	{
		title: 'Quick Links',
		links: [
			{ label: 'Style', href: '/#' },
			{ label: 'Health', href: '/#' },
			{ label: 'Relationship', href: '/#' },
			{ label: 'Legal & Privacy', href: '/#' },
		],
	},
]

const Footer = () => {
	return (
		<Box bg='blue.900'>
			<Box
				maxW='1320px'
				mx='auto'
				pt='100px'
				pb='12'
				px={4}
				textAlign='center'
			>
				<Grid
					templateColumns={{
						base: 'repeat(2, 1fr)',
						xl: 'repeat(5, 1fr)',
					}}
					gap={{
						base: 10,
						xl: 6,
					}}
					pb={10}
				>
					<GridItem
						colSpan={{
							base: 1,
							xl: 2,
						}}
						textAlign='left'
					>
						<Text
							color='white'
							fontSize='44px'
							pb={5}
							fontWeight={600}
						>
							Let's Talk!
						</Text>
						<Text color='fg.inverted' fontSize='24px' pb={2}>
							Contact Info
						</Text>
						<Text color='fg.subtle'>closerpage@email.com</Text>
						<Text color='fg.subtle'>
							12 Hilton St, Manchester M1 1JF
						</Text>
						<Text color='fg.subtle'>+44 012 34 5678</Text>
					</GridItem>
					{footerLinks.map(({ title, links }, index) => (
						<GridItem key={index} colSpan={1} textAlign='left'>
							<Text
								color='white'
								fontSize='20px'
								pb={9}
								fontWeight={600}
							>
								{title}
							</Text>
							<Stack gap={4}>
								{links.map(({ label, href }, index) => (
									<NextLink key={index} href={href} passHref>
										<Text
											key={index}
											color='fg.subtle'
											_hover={{ color: 'blue.300' }}
										>
											{label}
										</Text>
									</NextLink>
								))}
							</Stack>
						</GridItem>
					))}
				</Grid>
				<Separator colorPalette='fg.subtle' pb='10' />
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={3}
				>
					<HStack gap={4}>
						{socialLinks.map(
							({ href, icon: IconComponent }, index) => (
								<NextLink key={index} href={href} passHref>
									<Icon
										fontSize='24px'
										color='fg.subtle'
										_hover={{ color: 'blue.500' }}
									>
										<IconComponent />
									</Icon>
								</NextLink>
							)
						)}
					</HStack>
					<Text color='fg.subtle'>
						Next.js Site Template for Agency and Portfolio - © 2025
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
