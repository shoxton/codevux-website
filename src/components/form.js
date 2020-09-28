import React, { useState } from 'react'
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
	AlertDescription,
	CloseButton
} from '@chakra-ui/core'

const ContactForm = () => {

	const { register, errors, formState, handleSubmit, reset, setError } = useForm({mode: 'onChange'})

	const [submitted, setSubmitted] = useState(null);

	const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	const onSubmit = async data => {
    try {
      await fetch('/', {
        method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': 'contact',
					...data
				})
			});
			reset();
			setSubmitted(true)
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! Algo inesperado aconteceu. Tente novamente mais tarde. ${error.message}`
			);
			setSubmitted(false)
			console.log(error)
    }
  };

	return(
		<>
			{submitted === true &&
				<SubmitFeedback
					status="success"
					title="Mensagem enviada com sucesso!"
					description="Logo entraremos em contato."
				/>
			}{submitted === false &&
				<SubmitFeedback
					status="warning"
					title="Algo inesperado aconteceu."
					description="Tente novamente mais tarde, ou entre em contato por um de nossos outros canais."
				/>
			}
		<form
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Stack spacing={4}>

				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
				<input type="hidden" name="form-name" value="contact" />
				{/* Spam detector*/}
				<input type="hidden" name="bot-field" ref={register} />

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
		</form>
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
