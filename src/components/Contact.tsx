import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			console.error("EmailJS configuration is missing.");
			setIsSubmitting(false);
			return;
		}

		try {
			const result = await emailjs.sendForm(
				serviceId,
				templateId,
				form.current as HTMLFormElement,
				publicKey
			);
			console.log(result.text);
			if (form.current) {
				form.current.reset();
			}
			toast.success("Message sent!");
		} catch (error) {
			console.error("Failed to send email:", error);
			toast.error("Failed to send message.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div
			className="min-h-screen bg-stone-900 flex flex-col items-center p-4 md:p-8"
			id="contact"
		>
			<ToastContainer />
			<div className="w-full md:w-3/4 p-4 text-left flex flex-col md:flex-row">
				<div className="w-full md:w-3/4 p-4">
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Let's Connect!
					</h2>
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col space-y-4"
					>
						<label className="text-lg">Name</label>
						<input
							type="text"
							name="user_name"
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						<label className="text-lg">Email</label>
						<input
							type="email"
							name="user_email"
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						<label className="text-lg">Message</label>
						<textarea
							name="message"
							className="p-2 border border-gray-300 rounded-md bg-stone-800 text-white"
						/>
						<div className="flex justify-end">
							<button
								type="submit"
								disabled={isSubmitting}
								className="p-2 bg-accent hover:scale-105 hover:bg-danger/90 hover:text-white transform transition-transform duration-200 text-black text-xl rounded-md cursor-pointer w-full md:w-1/5"
							>
								{isSubmitting ? "Sending..." : "Send"}
							</button>
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
						src="\Square-Silly-Otamatone.jpg"
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
							className="transition-transform transform hover:scale-105"
						/>
						<SocialIcon
							url="https://www.instagram.com/denbitmusic?igsh=MXR0Y2g2M3NmMTFxdg=="
							style={{ height: 100, width: 100 }}
							target="_blank"
							bgColor="#028391"
							className="transition-transform transform hover:scale-105"
						/>
					</div>
				</div>
			</div>

			{/* Small Screen Layout */}
			<div className="flex md:hidden w-full flex-col items-center mt-4">
				<div
					id="bottom-photo"
					className="w-full flex justify-center items-center mb-4"
					style={{ minWidth: "150px", minHeight: "150px" }}
				>
					<img
						src="\Square-Silly-Otamatone.jpg"
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
					/>
					<SocialIcon
						url="https://www.instagram.com/denbitmusic?igsh=MXR0Y2g2M3NmMTFxdg=="
						style={{ height: 60, width: 60 }}
						target="_blank"
						bgColor="#028391"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
