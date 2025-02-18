import { Box } from '@chakra-ui/react'
import SectionHeader from './SectionHeader'

const Team = () => {
	return (
		<Box maxW='1320px' px={4} mx='auto' py='120px'>
			<SectionHeader
				title='Team'
				subtitle='Our Awesome Team'
				description='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
			/>
		</Box>
	)
}

export default Team
