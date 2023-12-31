export interface Professional {
  id?: string;
  isEnabled?: boolean;
  users_id: string;
  cpf: string;
  preferredName: string;
  phoneNumber: string;
  cnhImage: File | null;
  userHoldingCnhImage: File | null;
  cnhNumber: string;
  cnhCategory: string;
  baseValue: number;
  valuePerKm: number;
  supportedState: string;
  supportedCities: string[];
}
