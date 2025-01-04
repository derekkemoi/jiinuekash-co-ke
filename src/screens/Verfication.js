import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "../components/ColorSchemeToggle";
import { Avatar, Card, CardContent } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import url from "../pawa.jpg";
import TablePay from "../components/TablePay";
import VerificationModal from "../components/VerificationModal";
import { useAtom } from "jotai";
import { userObject } from "../state";

<ColorSchemeToggle />;

const customTheme = extendTheme({ defaultColorScheme: "dark" });

export default function Verification() {
  const navigate = useNavigate();

  const [user, setUser] = useAtom(userObject);

  if (user.accountStatus) {
    navigate("/verify");
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
          width: "100%",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          // zIndex: 1,
          display: "flex",
          justifyContent: "center",
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
            sx={{
              pb: 5,
              display: "flex",
              flexDirection: "column",
              width: 600,
              maxWidth: "100%",
              mx: "auto",
            }}
          >
            <Stack sx={{ gap: 2 }}>
              <Typography component="h2" level="h2">
                Account Verification
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Typography>
                    DEVLINK VENTURES is a new finance firm built on Trust and
                    financial discipline. Our company requires
                    customer-commitment fee of
                    <Typography level="title-lg"> Ksh. {user.fee} </Typography>.
                    Your commitment fee shall be refunded with your first loan
                    you secure with us. Once you make the payment, your loan
                    application will be reviewed and acted upon by our staff in
                    few hours. Thank you
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            <Stack sx={{ gap: 2, mt: 2 }}>
              <TablePay fee={user.fee} />
              <VerificationModal />
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }} backgroundColor="primary.main">
            <Typography level="body-xs" sx={{ textAlign: "center" }}>
              © Mkopo Poa {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
