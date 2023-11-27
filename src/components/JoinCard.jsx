import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "30px",
  fontWeight: "400",
  padding: "8px",
  borderLeft: "2px solid #e1ce0b",
});
const StyledTypoTwo = styled(Typography)({
  fontSize: "40px",
  fontWeight: "400",
});

const JoinCard = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profession: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      profession: "",
      message: "",
    });
  };

  return (
    <Stack
      gap={3}
      sx={{
        padding: "8%",
      }}
    >
      <StyledTypo>{content.Join}</StyledTypo>
      <StyledTypoTwo>{content.Change}</StyledTypoTwo>
      <form onSubmit={handleSubmit}>
        <Stack direction={"row"} gap={2}>
          <TextField
            size="small"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            size="small"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Stack>
        <Stack direction={"row"} gap={2}>
          <TextField
            size="small"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            size="small"
            label="Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Stack>
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#ed3604" }}
        >
          {content.Join}
        </Button>
      </form>
    </Stack>
  );
};

export default JoinCard;
