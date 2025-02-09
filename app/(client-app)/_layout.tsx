import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect, Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  if (status === "checking") {
    return <IsLoadingRefresh />;
  }

  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default CheckAuthenticationLayout;
