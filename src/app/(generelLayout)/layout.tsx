// app/layout.tsx
import type { Metadata } from "next";
import NavBer from '../../Component/NavBer/NavBer'
import ElectroFooter from "@/Component/Footer/Footer";

export const metadata: Metadata = {
    title: "Your App",
    description: "App description",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBer />
                {children}
                <ElectroFooter />
                </body>
        </html>
    );
}
