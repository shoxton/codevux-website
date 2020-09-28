import { theme as defaultTheme } from "@chakra-ui/core"
import React from 'react'

const customIcons = {
	codevux: {
		path: <path fill="currentColor" d="M328.03 186.01L338.2 192.6L348.09 199.56L357.69 206.89L367 214.58L376.01 222.61L384.7 230.97L393.07 239.67L401.1 248.67L401.1 248.67L408.78 257.98L416.11 267.59L423.07 277.48L429.66 287.64L435.86 298.07L441.67 308.75L447.07 319.68L452.05 330.84L456.61 342.22L460.73 353.82L464.4 365.62L467.62 377.62L470.37 389.79L472.64 402.14L474.43 414.66L474.43 414.66L468.3 417.99L457.38 423.39L446.22 428.37L434.83 432.93L423.24 437.05L411.44 440.72L399.44 443.94L387.26 446.69L374.91 448.96L362.4 450.74L349.73 452.03L336.92 452.81L323.98 453.07L311.04 452.81L298.23 452.03L285.57 450.74L273.05 448.96L260.7 446.69L248.52 443.94L236.53 440.72L224.73 437.05L213.13 432.93L201.75 428.37L190.59 423.39L179.66 417.99L168.98 412.18L165.57 410.16L166.72 402.14L168.99 389.79L171.74 377.62L174.95 365.62L178.63 353.82L182.75 342.22L187.3 330.84L192.29 319.68L197.69 308.75L203.49 298.07L209.7 287.64L216.28 277.48L223.25 267.59L230.58 257.98L238.26 248.67L246.29 239.67L254.66 230.97L263.35 222.61L272.35 214.58L281.67 206.89L291.27 199.56L301.16 192.6L311.32 186.01L319.68 181.04L328.03 186.01L328.03 186.01Z" />,
		viewBox: "0 0 640 640"
	}
}

const theme = {
		...defaultTheme,
		fonts: {
			body: "Open Sans, system-ui, sans-serif",
			heading: "Montserrat, system-ui, sans-serif",
		},
		icons: {
			...defaultTheme.icons,
			...customIcons
		}
}

export default theme