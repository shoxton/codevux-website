import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as FaIcons from 'react-icons/fa'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import { Section, SectionHeading } from '../components/utils'
import ContactForm from '../components/form'
import {
	Box,
	Stack,
	SimpleGrid,
	Link,
	Flex,
	PseudoBox,
	Text,
} from '@chakra-ui/core'
import SEO from '../components/seo'

export default (props) => {

	const stLetterToUpp = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const { contact, social } = props.data.site.siteMetadata

	return(
		<>
		<SEO
			title="Fale conosco"
			description="Vamos criar algo incrível juntos? Fale conosco para saber mais sobre nossos serviços e soluções, incluindo desenvolvimento de sites, blogs, lojas virtuais e sistemas personalizados."
		/>
		<Layout>
			<Section>
				<Container flexDirection="column">
					<SectionHeading
						heading="Vamos criar algo incrível juntos?"
						text="Conte-nos mais sobre seu projeto"
					/>
					<SimpleGrid spacing={8} columns={{base: 1, lg: 2}}>
						<Box>
							<ContactForm />
						</Box>
						<Stack
							p={{base: 8, lg: 16}}
							spacing={{base: 4, lg: 4}}
							bg="teal.500"
							borderRadius="md"
							align="center"
							justify="center"
						>
							<Stack
								spacing={4}
								fontSize={{base: 'xl', lg: '2xl'}}
								color="white"
								width="100%"
							>
								<Stack align="flex-end" justify="center" bg="teal.600" p={4} borderRadius="md" isInline >
									<Box
										as={FaIcons.FaEnvelope}
										size={{base: '1.5rem', lg: '2rem'}}
										color="currentColor"
									/>
									<Link
										href={`mailto:${contact.email}`}
									>
										{contact.email}
									</Link>
								</Stack>
								<Stack align="flex-end" justify="center" bg="teal.600" p={4} borderRadius="md" isInline >
									<Box
										as={FaIcons.FaWhatsapp}
										size={{base: '1.5rem', lg: '2rem'}}
										color="currentColor"
									/>
									<Link
										href={`tel:${contact.phone}`}
									>
										{contact.phone}
									</Link>
								</Stack>
							</Stack>
							<Flex
								width="100%"
								justify="space-between"
							>
								{Object.entries(social).map(([key, value], index) =>  {
									const iconName = `Fa${stLetterToUpp(key)}`
									return(
										<Link
											key={index}
											textAlign="center"
											color="white"
											href={value}

										>
											<PseudoBox
												bg="teal.600"
												borderRadius="md"
												p={{base: 4, lg: 6}}
												fill="currentColor"
												as={FaIcons[iconName]}
												size={{base: '4.75rem', lg: '6.75rem'}}
												mb={2}
											/>
											<Text fontSize="xs" textTransform="lowercase">
												{`/${key}`}
											</Text>
										</Link>
									)
								})}
							</Flex>
						</Stack>
					</SimpleGrid>
				</Container>
			</Section>
		</Layout>
		</>
	)

}

export const ContactQuery = graphql`
	query ContactQuery {
		site {
			siteMetadata {
				contact {
					phone
					email
				}
				social {
					twitter
					facebook
					github
				}
			}
		}
	}
`
