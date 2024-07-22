export interface ISystem {
  Header: React.HTMLAttributes<HTMLDivElement> & {
    ConnectWallet?: React.ReactNode;
  };
  SubNav: {
    symbol: string;
    text: string;
    icon?: React.ReactNode;
    path?: string;
    target?: string;
  };
  Nav: {
    symbol: string;
    text: string;
    path?: string;
    icon?: React.ReactNode;
    subNav?: ISystem["SubNav"][];
    target?: string;
  };
  Footer: React.HTMLAttributes<HTMLDivElement>;
  Cookies: React.HTMLAttributes<HTMLDivElement>;
}
