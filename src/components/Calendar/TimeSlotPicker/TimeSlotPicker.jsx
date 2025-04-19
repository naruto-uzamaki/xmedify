import { Chip, Stack, Typography, Divider } from "@mui/material";

function TimeSlotPicker({
  availableSlots,
  selectedDate,
  details,
  handleBooking,
}) {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={props.handleClick}
    />
  );
  const handleClick = (slot) => {
    handleBooking({
      ...details,
      bookingDate: selectedDate,
      bookingTime: slot,
    });
  };
  const renderSlots = (slotsArr, slotTime) => {
    if (slotsArr.length === 0) {
      return null;
    }

    return (
      <Stack
        direction="row"
        alignItems="center"
        px={{ xs: 0, md: 6 }}
        flexWrap={"wrap"}
      >
        <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
          {slotTime}
        </Typography>
        {slotsArr.map((slot) => (
          <CustomChip
            key={slot}
            label={slot}
            handleClick={() => handleClick(slot)}
          />
        ))}
      </Stack>
    );
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {renderSlots(availableSlots.morning, "Morning")}
      {renderSlots(availableSlots.afternoon, "Afternoon")}
      {renderSlots(availableSlots.evening, "Evening")}
    </Stack>
  );
}

export default TimeSlotPicker;
