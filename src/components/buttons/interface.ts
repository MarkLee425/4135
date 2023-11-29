export interface ButtonProps {
    type?: "submit" | "reset" | "button";
    txt: string;
    icon: string;
    variant: string;
    onSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}