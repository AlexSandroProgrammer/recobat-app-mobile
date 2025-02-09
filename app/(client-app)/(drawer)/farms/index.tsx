import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import Layout from "@/presentation/layouts/Layout";

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();

  if (!user) {
    return <IsLoadingRefresh />;
  }
  return (
    <Layout>
      <FarmList userId={user.id} />
    </Layout>
  );
};

export default FarmScreen;
