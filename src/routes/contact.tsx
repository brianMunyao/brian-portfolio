import styled from 'styled-components';

const ContactPage = () => {
	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// };

	return (
		<Container>
			<p className="title">Contact Me</p>
			<p className="subtitle">
				Feel free to Contact me by submitting the form below and I will
				get back to you as soon as possible
			</p>

			<form
				id="contact-form"
				action="https://formspree.io/f/xeqwbqlr"
				method="post"
				// onSubmit={handleSubmit}
			>
				<div className="contact-con">
					<div className="input-con">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your name"
						/>
					</div>
					<div className="input-con">
						<label htmlFor="email">Email Address</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="input-con">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							placeholder="Enter your message"
						></textarea>
					</div>

					<button type="submit">Submit</button>
				</div>
			</form>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 40px;
	padding: 60px 30px 30px;
	flex: 1;

	.contact-con {
		margin: auto;
		max-width: 400px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.input-con {
		display: flex;
		flex-direction: column;
		gap: 3.5px;
	}

	.input-con input,
	.input-con textarea {
		font-size: 16px;
		padding: 10px;
		border: none;
		border-radius: 8px;
		transition: all 0.2s linear;
		border: 1.5px solid #874f1000;
		background: #efefef;
	}
	.input-con input:focus,
	.input-con textarea:focus {
		outline: none;
		border: 1cap.5 solid #875010;
	}
	.input-con textarea {
		height: 100px;
		resize: none;
	}

	.contact-con button {
		width: 100%;
	}

	@media (max-width: 1000px) {
		.title,
		.subtitle {
			width: 60%;
		}
	}
	@media (max-width: 850px) {
		.title,
		.subtitle {
			width: 60%;
		}
	}

	@media (max-width: 750px) {
		.title,
		.subtitle {
			width: 70%;
		}
	}

	@media (max-width: 650px) {
		.title,
		.subtitle {
			width: 80%;
		}
	}
	@media (max-width: 550px) {
		.title,
		.subtitle {
			width: 90%;
			h1 {
				font-size: 35px;
				line-height: 50px;
				padding: 80px 10px 35px;
			}
		}
		.title {
			font-size: 30px;
		}
		h2 {
			font-size: 25px;
			margin: 40px 0 20px;
		}
		.contact-s {
			.contact-con {
				width: 100%;
			}
		}
	}
`;
export default ContactPage;
