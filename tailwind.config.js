/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#01204E",
				secondary: "#028391",
				accent: "#F6DCAC",
				highlight: "#FAA968",
				danger: "#F85525",
			},
		},
	},
	plugins: [],
};
