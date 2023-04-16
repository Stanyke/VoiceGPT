import React from "react";
import { useSnackbar, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SNACKBAR_VARIANT } from "../../config";

function useCustomSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message, variant = SNACKBAR_VARIANT.DEFAULT) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 7000,
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      ),
    });
  };

  return { showSnackbar };
}

export default useCustomSnackbar;
