import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import { Input, Typography } from "@mui/joy";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userObject } from "../state";
import { mpesaCodes } from "../state/index";

export default function VerificationModal(props) {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userObject);
  const [mpesaCodeList, setMpesaCodeList] = useAtom(mpesaCodes);
  const [open, setOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [messageError, setMessageError] = useState(false);
  const [progress, setProgress] = useState(false);
  useEffect(() => {
    fetch("https://derekkemoi.github.io/MKOPOPAWA/DEVLINKVENTURES.json")
      .then((response) => response.json())
      .then(
        (data) => (
          setPaymentDetails(data.mpesaPaymentDetails), setProgress(false)
        )
      );
  }, []);
  return (
    <React.Fragment>
      <Button
        style={{ backgroundColor: "#00CC71" }}
        type="submit"
        fullWidth
        onClick={() => setOpen(true)}
      >
        CONFIRM VERIFICATION
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Verify Payments</DialogTitle>
          <DialogContent>
            Copy the entire confirmation message you received from M-PESA after
            making payments and paste in the text field below then click verify
            button
          </DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formJson.message);
              var mpesaMessageList = formJson.message.split(" ");
              var tillNameList = paymentDetails.tillName.split(" ");
              if (
                mpesaCodeList.includes(mpesaMessageList[0]) ||
                tillNameList[0] != mpesaMessageList[5]
              ) {
                setMessageError(true);
                return;
              } else {
                setMessageError(false);
              }
              setUser((prev) => ({
                ...prev,
                accountStatus: true,
              }));
              setOpen(false);
              navigate(-1);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>M-PESA Message</FormLabel>
                <Input
                  placeholder="Paste M-PESA Message Here"
                  error={messageError}
                  name="message"
                  helperText={
                    messageError ? "Valid M-PESA message required" : ""
                  }
                  minRows={2}
                  required
                />

                {messageError ? (
                  <Typography color="danger">
                    Valid M-PESA message required
                  </Typography>
                ) : (
                  ""
                )}
              </FormControl>
              <Button style={{ backgroundColor: "#00CC71" }} type="submit">
                VERIFY
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
