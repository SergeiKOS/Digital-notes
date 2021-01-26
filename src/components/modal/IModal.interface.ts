export default interface IModal {
  isOpen: boolean;
  onClose(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ): void;
}
