//components
import Header from "../../components/Header";

//types
import {ReactNode, ReactElement} from 'react';

export default function UserLayout({ children }:{children:ReactNode}):ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}