import React$1 from 'react';
import { Button } from 'primereact/button';

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

type CustomButtonProps = {
    label: string;
} & React.ComponentProps<typeof Button>;
declare const CustomButton: React.FC<CustomButtonProps>;

export { CustomButton, Page };
