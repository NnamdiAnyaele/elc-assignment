import Box from "@mui/material/Box";

import Timer from "./Timer";
import { useCountdown } from "../../hooks/useCoundown";
import { getDateXDaysFromNow } from "../../utils/helpers";

const containerStyle = {
	mr: { sm: "1rem", xs: "0.5rem" },
	"&:lastChild": {
		mr: 0,
	},
};

const countDownDate = getDateXDaysFromNow(8);
const Countdown = () => {
	const [days, hours, minutes, seconds] = useCountdown(countDownDate);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				"&:lastChild": {
					mr: 0,
				},
			}}
		>
			<Box sx={containerStyle}>
				<Timer time="days" value={days} />
			</Box>
			<Box sx={containerStyle}>
				<Timer time="hours" value={hours} />
			</Box>
			<Box sx={containerStyle}>
				<Timer time="minutes" value={minutes} />
			</Box>
			<Box sx={containerStyle}>
				<Timer time="seconds" value={seconds} />
			</Box>
		</Box>
	);
};

export default Countdown;
