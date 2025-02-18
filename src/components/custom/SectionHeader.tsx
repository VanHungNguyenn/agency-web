import { Box, Text } from '@chakra-ui/react'

interface SectionHeaderProps {
	title: string
	subtitle: string
	description: string
}

const SectionHeader = ({
	title,
	subtitle,
	description,
}: SectionHeaderProps) => {
	return (
		<Box textAlign='center' pb={10}>
			<Text
				textTransform='uppercase'
				fontWeight={600}
				color='colorPalette.500'
				pb={2}
			>
				{title}
			</Text>
			<Text fontSize='46px' fontWeight={600} pb={5}>
				{subtitle}
			</Text>
			<Text
				fontSize='18px'
				color='gray.500'
				maxW='600px'
				mx='auto'
				fontWeight={500}
			>
				{description}
			</Text>
		</Box>
	)
}

export default SectionHeader
