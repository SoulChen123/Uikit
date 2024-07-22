import { useMemo } from "react";
import useUIKit from "./useUIKit";

const useAccount = () => {
  const { user, accounts, setUser } = useUIKit();

  const isPortfolio = user?.tradingType === "PORTFOLIO";

  const isMainAccount = useMemo(
    () => accounts?.find((p) => p.accounts.accountId === user?.accountId)?.accounts.isMainAccount,
    [accounts, user?.accountId]
  );

  return {
    ...user,
    isLogin: !!user,
    isLoginPending: user === undefined,
    isMainAccount,
    isPortfolio,
    setUser
  };
};

export default useAccount;
