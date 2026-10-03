import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const SUBMIT_COOLDOWN_MS = 60_000;

type FormStatus = "idle" | "sending" | "success" | "error";

function isValidEmail(value: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const lastSubmitAt = useRef(0);
	const [status, setStatus] = useState<FormStatus>("idle");
	const [statusMessage, setStatusMessage] = useState("");

	const sendEmail = async (e: FormEvent) => {
		e.preventDefault();

		if (!form.current || status === "sending") {
			return;
		}

		const formData = new FormData(form.current);
		const honeypot = String(formData.get("website") ?? "").trim();
		const name = String(formData.get("user_name") ?? "").trim();
		const email = String(formData.get("user_email") ?? "").trim();
		const message = String(formData.get("message") ?? "").trim();

		// Bots often fill hidden fields; fail closed without calling EmailJS.
		if (honeypot) {
			setStatus("success");
			setStatusMessage("Thanks — your message was sent.");
			form.current.reset();
			return;
		}

		if (!name || !email || !message) {
			setStatus("error");
			setStatusMessage("Please fill in your name, email, and message.");
			return;
		}

		if (
			name.length > MAX_NAME_LENGTH ||
			email.length > MAX_EMAIL_LENGTH ||
			message.length > MAX_MESSAGE_LENGTH
		) {
			setStatus("error");
			setStatusMessage("One or more fields are too long. Please shorten your message.");
			return;
		}

		if (!isValidEmail(email)) {
			setStatus("error");
			setStatusMessage("Please enter a valid email address.");
			return;
		}

		const now = Date.now();
		if (now - lastSubmitAt.current < SUBMIT_COOLDOWN_MS) {
			setStatus("error");
			setStatusMessage("Please wait a minute before sending another message.");
			return;
		}

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setStatus("error");
			setStatusMessage("Contact form is not configured. Please try again later.");
			return;
		}

		setStatus("sending");
		setStatusMessage("Sending…");

		try {
			await emailjs.sendForm(
				serviceId,
				templateId,
				form.current,
				publicKey
			);
			lastSubmitAt.current = Date.now();
			setStatus("success");
			setStatusMessage("Thanks — your message was sent.");
			form.current.reset();
		} catch {
			setStatus("error");
			setStatusMessage("Something went wrong. Please try again in a moment.");
		}
	};

	return (
		<div
			className="min-h-screen bg-stone-900 flex flex-col items-center p-4 md:p-8"
			id="contact"
		>
			<div className="w-full md:w-3/4 p-4 text-left flex flex-col md:flex-row">
				<div className="w-full md:w-3/4 p-4">
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Let's Connect!
					</h2>
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col space-y-4"
						noValidate
					>
						{/* Honeypot: leave empty. Hidden from assistive tech and sighted users. */}
						<div
							aria-hidden="true"
							className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
						>
							<label htmlFor="website">Website</label>
							<input
								type="text"
								id="website"
								name="website"
								tabIndex={-1}
								autoComplete="off"
							/>
						</div>
						<label className="text-lg" htmlFor="user_name">
							Name
						</label>
						<input
							id="user_name"
							type="text"
							name="user_name"
							required
							maxLength={MAX_NAME_LENGTH}
							autoComplete="name"
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						<label className="text-lg" htmlFor="user_email">
							Email
						</label>
						<input
							id="user_email"
							type="email"
							name="user_email"
							required
							maxLength={MAX_EMAIL_LENGTH}
							autoComplete="email"
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						<label className="text-lg" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							maxLength={MAX_MESSAGE_LENGTH}
							rows={5}
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						{statusMessage ? (
							<p
								role="status"
								aria-live="polite"
								className={
									status === "error"
										? "text-red-300"
										: status === "success"
											? "text-emerald-300"
											: "text-stone-300"
								}
							>
								{statusMessage}
							</p>
						) : null}
						<div className="flex justify-end">
							<input
								type="submit"
								value={status === "sending" ? "Sending…" : "Send"}
								disabled={status === "sending"}
								className="p-2 bg-accent hover:scale-105 hover:bg-danger/90 hover:text-white transform transition-transform duration-200 text-black text-xl rounded-md cursor-pointer w-full md:w-1/5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
							/>
						</div>
					</form>
				</div>
			</div>

			{/* Large Screen Layout */}
			<div className="hidden md:flex w-full justify-center items-start mt-[4rem] pr-36 lg:pr-56">
				<div
					id="bottom-photo"
					className="w-[22%] flex justify-start items-start"
					style={{ minWidth: "280px", minHeight: "280px" }}
				>
					<img
						src="/Square-Silly-Otamatone.jpg"
						alt="Square Silly Otamatone"
						className="rounded-full"
						style={{ width: "280px", height: "280px" }}
					/>
				</div>
				<div className="w-1/8 pt-10 flex flex-col items-start justify-end space-y-1">
					<div className="flex flex-col items-center space-y-4">
						<SocialIcon
							url="https://youtube.com/@denbitmusic?si=f5CcmLVMxMirPDGU"
							style={{ height: 100, width: 100 }}
							target="_blank"
							rel="noopener noreferrer"
							className="transition-transform transform hover:scale-105"
						/>
						<SocialIcon
							url="https://www.instagram.com/denbitmusic?igsh=MXR0Y2g2M3NmMTFxdg=="
							style={{ height: 100, width: 100 }}
							target="_blank"
							rel="noopener noreferrer"
							bgColor="#028391"
							className="transition-transform transform hover:scale-105"
						/>
					</div>
				</div>
			</div>

			{/* Small Screen Layout */}
			<div className="flex md:hidden w-full flex-col items-center mt-4">
				<div
					id="bottom-photo-mobile"
					className="w-full flex justify-center items-center mb-4"
					style={{ minWidth: "150px", minHeight: "150px" }}
				>
					<img
						src="/Square-Silly-Otamatone.jpg"
						alt="Square Silly Otamatone"
						className="rounded-full"
						style={{ width: "150px", height: "150px" }}
					/>
				</div>
				<div className="w-full flex flex-col items-center space-y-2">
					<SocialIcon
						url="https://youtube.com/@denbitmusic?si=f5CcmLVMxMirPDGU"
						style={{ height: 60, width: 60 }}
						target="_blank"
						rel="noopener noreferrer"
					/>
					<SocialIcon
						url="https://www.instagram.com/denbitmusic?igsh=MXR0Y2g2M3NmMTFxdg=="
						style={{ height: 60, width: 60 }}
						target="_blank"
						rel="noopener noreferrer"
						bgColor="#028391"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
