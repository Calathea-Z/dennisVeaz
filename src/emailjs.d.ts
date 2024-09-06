declare module "emailjs-com" {
	export function sendForm(
		serviceID: string,
		templateID: string,
		form: HTMLFormElement,
		userID: string
	): Promise<{ text: string }>;

	export function init(userID: string): void;
}
