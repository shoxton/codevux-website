import React, { useState } from 'react'
import {
	useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
	Honeypot
} from 'react-netlify-forms'
import { useForm } from 'react-hook-form'
import {
	Stack,
	FormControl,
	Input,
	FormErrorMessage,
	Textarea,
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription
} from '@chakra-ui/core'

const ContactForm = () => {

	const { register, errors, formState, handleSubmit, reset, setError } = useForm()

	const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

	const netlify = useNetlifyForm({
    name: 'contact-form',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
			console.log('Successfully sent form data to Netlify Server')
			reset()
		},
		onFailure: (response, context) => {
			console.log("Failed to send form data to Netlify Server")
		}
  })
  const onSubmit = (data) => netlify.handleSubmit(null, data)

	return(
		<>
			{netlify.success &&
				<SubmitFeedback
					status="success"
					title="Mensagem enviada com sucesso!"
					description="Logo entraremos em contato."
				/>
			}{netlify.error &&
				<SubmitFeedback
					status="warning"
					title="Algo inesperado aconteceu."
					description="Tente novamente mais tarde, ou entre em contato por um de nossos outros canais."
				/>
			}
			<NetlifyFormProvider {...netlify}>
				<NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={4}>

						<Honeypot />

						<FormControl isInvalid={errors.name}>
							<Input
								name="name"
								ref={register({required: "Preencha este campo."})}
								placeholder="Nome"
								variant="filled"
								isInvalid={errors.name}
								focusBorderColor="teal.500"
								errorBorderColor="crimson"
								size="lg"

							/>
							<FormErrorMessage>
								{errors.name && errors.name.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.email}>
							<Input
								name="email"
								ref={register({
									required: "Preencha este campo.",
									pattern: {
										value: EMAIL_REGEX,
										message: "Digite um email válido."
									}
								})}
								isInvalid={errors.email}
								focusBorderColor="teal.500"
								placeholder="Email"
								variant="filled"
								focusBorderColor="teal.500"
								size="lg"
							/>
							<FormErrorMessage>
								{errors.email && errors.email.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.message}>
							<Textarea
								name="message"
								ref={register({
									required: "Preencha este campo.",
									minLength: {
										value: 20,
										message: `Mínimo de 20 caracteres.`
									}
								})}
								isInvalid={errors.message}
								focusBorderColor="teal.500"
								placeholder="Mensagem"
								resize="vertical"
								variant="filled"
								focusBorderColor="teal.500"
								size="lg"
								minH="30vh"

							/>
							<FormErrorMessage>
								{errors.message && errors.message.message}
							</FormErrorMessage>
						</FormControl>

						<Button
							isLoading={formState.isSubmitting}
							rightIcon="arrow-right"
							type="submit"
							variantColor="teal"
							size="lg"
						>
							Enviar
						</Button>

					</Stack>
				</NetlifyFormComponent>
			</NetlifyFormProvider>
		</>
	)
}

export const SubmitFeedback = ({status, title, description, ...props}) => (
	<Alert
		status={status}
		flexDirection={{base: 'column', lg: 'row'}}
		textAlign={{base: 'center', lg: 'initial'}}
		mb={4}
		{...props}
	>
		<AlertIcon
			size="2rem"
			mb={{base: 2, lg: 0}}
		/>
		<Stack spacing={0} >
			<AlertTitle
				mr={{base: 0, lg: 2}}
			>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Stack>
	</Alert>
)

export default ContactForm
