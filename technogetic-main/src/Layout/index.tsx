import Footer from '@/components/includes/Footer/Footer';
import Header from '@/components/includes/Header/Header';
import React, { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
}
function index({ children, ...props }: Props) {
  return (
    <>
    <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
}

export default index;
