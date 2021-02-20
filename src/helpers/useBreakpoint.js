import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const useBreak = () => {
	const screens = useBreakpoint();

	const mediumAndUp = () => {
		return screens.md;
	};

	const extraLarge = () => {
		return screens.xl || screens.xxl;
	};

	const extraSmall = () => {
		return screens.xs;
	};

	const smallAndDown = () => {
		return !screens.md && !screens.lg && !screens.xl && !screens.xxl;
	};
	const small = () => {
		return screens.sm && !screens.md;
	};

	return { mediumAndUp, extraSmall, smallAndDown, small, extraLarge };
};

export default useBreak;
