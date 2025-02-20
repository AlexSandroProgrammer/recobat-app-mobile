import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();

  if (!user) {
    return <IsLoadingRefresh />;
  }
  return (
    <>
      <FarmList userId={user.id} />
    </>
  );
};

export default FarmScreen;
