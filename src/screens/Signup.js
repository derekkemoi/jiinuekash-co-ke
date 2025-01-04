import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "../components/ColorSchemeToggle";
import { Avatar, Card, CardContent, Option, Select } from "@mui/joy";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import url from "../pawa.jpg";
import signupImage from "../student.webp";

import { userObject } from "../state";
<ColorSchemeToggle />;

const customTheme = extendTheme({ defaultColorScheme: "dark" });

export default function JoySignInSideTemplate() {
  const navigate = useNavigate();
  const navigateToGet = () => {
    navigate("/get");
  };

  function randomAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [user, setUser] = useAtom(userObject);

  if (user.registered) {
    navigate("/get");
  }

  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: "100%", md: "50vw" },
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255 255 255 / 0.1)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
              <Typography level="title-lg">JIINUE KASH</Typography>
              <Avatar
                variant={"rounded"}
                alt="The image"
                src={url}
                style={{
                  width: 38,
                  height: 38,
                }}
              />
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: "hidden",
              },
            }}
          >
            <Stack sx={{ gap: 2, mb: 2 }}>
              <Stack sx={{ gap: 1 }}>
                <Typography component="h2" level="h2">
                  Find Your Loan Eligibility
                </Typography>
                <Divider
                  sx={(theme) => ({
                    [theme.getColorSchemeSelector("light")]: {
                      color: { xs: "#FFF", md: "text.tertiary" },
                    },
                  })}
                ></Divider>
              </Stack>
              <Card variant="outlined">
                <CardContent>
                  <Typography component="h1" level="h5">
                    You can qualify for Ksh. 3,000 - 45,000 loan to MPESA
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            <Stack sx={{ mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(formData.entries());
                  var amount = 0;

                  console.log("Loan name selected", formJson.loan);

                  // <Option value="Personal Loan">Personal Loan</Option>
                  // <Option value="Educational Loan">Educational Loan</Option>
                  // <Option value="Business Loan">Business Loan</Option>
                  // <Option value="Car Loan">Car Loan</Option>
                  // <Option value="Rental Loan">Rental Loan</Option>

                  if (formJson.loan === "Personal Loan") {
                    amount = randomAmount(6500, 20000);
                  }
                  if (formJson.loan === "Educational Loan") {
                    amount = randomAmount(6500, 20000);
                  }
                  if (formJson.loan === "Business Loan") {
                    amount = randomAmount(6500, 20000);
                  }
                  if (formJson.loan === "Car Loan") {
                    amount = randomAmount(6500, 20000);
                  }
                  if (formJson.loan === "Rental Loan") {
                    amount = randomAmount(36500, 20000);
                  }
                  setUser((prev) => ({
                    ...prev,
                    trackingID: Math.random().toString(36).slice(2),
                    name: formJson.name,
                    mpesaNumber: formJson.phone,
                    idNumber: formJson.id,
                    loanType: formJson.loan,
                    loanAmount: amount,
                    fee: randomAmount(150, 200),
                    accountStatus: false,
                    registered: true,
                  }));
                  navigateToGet();
                  // alert(JSON.stringify(data));
                }}
              >
                <FormControl required>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="name"
                    placeholder="Enter your full name as per your ID"
                    name="name"
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter your M-PESA registred phone number"
                    name="phone"
                  />
                </FormControl>
                {/* <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email" />
                </FormControl> */}
                <FormControl required>
                  <FormLabel>ID Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter your ID Number"
                    name="id"
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Loan Type</FormLabel>
                  <Select placeholder="Select loan type" name="loan" required>
                    <Option value="Personal Loan">Personal Loan</Option>
                    <Option value="Educational Loan">Educational Loan</Option>
                    <Option value="Business Loan">Business Loan</Option>
                    <Option value="Car Loan">Car Loan</Option>
                    <Option value="Rental Loan">Rental Loan</Option>
                  </Select>
                </FormControl>
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: 'space-between',
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" level="h5">
                      No CRB Check. No Guarantors . Disbursed to MPESA . No
                      Paperwork
                    </Typography>
                  </Box>
                  <Button
                    style={{ backgroundColor: "#00CC71" }}
                    type="submit"
                    fullWidth
                  >
                    FIND YOUR LOAN ELIGIBILITY
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }} backgroundColor="primary.main">
            <Typography level="body-xs" sx={{ textAlign: "center" }}>
              © Mkopo Poa {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: "50vw" },
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${signupImage})`,
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage: `url(${signupImage})`,
          },
        })}
      />
    </CssVarsProvider>
  );
}
