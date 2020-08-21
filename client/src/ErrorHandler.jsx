import React from "react";
import SnackBar from "./snackBar";

function ErrorHandler(props) {
  let { error } = props;
  return (
    <div>
      {error ? (
        error.response ? (
          typeof error.response.data !== "string" ? (
            <SnackBar
              msgSeverity="error"
              message="Internal Server Error"
              snackbarOpen="open"
            />
          ) : (
            <SnackBar
              msgSeverity="error"
              message={error.response.data}
              snackbarOpen="open"
            />
          )
        ) : (
          <SnackBar
            msgSeverity="Internal Server Error"
            message={error.response.data}
            snackbarOpen="open"
          />
        )
      ) : null}
    </div>
  );
}

export default ErrorHandler;
