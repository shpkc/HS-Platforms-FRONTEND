import React from "react";

export function useScroll() {
	const [scrollY, setScrollY] = React.useState<number>(0);

	React.useEffect(() => {
		let mounted = true;
		window.addEventListener("scroll", () => {
			if (mounted) {
				setScrollY(window.pageYOffset);
			}
		});
		return () => {
			mounted = false;
		};
	}, []);

	return {
		scrollY,
	};
}
