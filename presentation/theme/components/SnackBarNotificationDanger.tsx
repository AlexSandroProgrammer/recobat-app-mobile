import React from "react";
import { Snackbar } from "react-native-paper";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props {
  visible: boolean;
  onDismiss: () => void;
  message: string;
}
const SnackBarNotificationDanger = ({ visible, onDismiss, message }: Props) => {
  const danger = useThemeColor({}, "danger");

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: "Cerrar",
        onPress: onDismiss,
      }}
      style={{ backgroundColor: danger }}
    >
      {message}
    </Snackbar>
  );
};

export default SnackBarNotificationDanger;
