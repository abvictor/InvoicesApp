export type ModalProps = {
  onRequestClose: () => void;
  isModalOpen: boolean;
};
export interface CardDetails {
  id: string;
  date: string;
  name: string;
  total: number;
  status: string;
}
