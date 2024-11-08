import { Transaccion } from './Transaccion';

export interface ContextType {
    dinero: number;
    transacciones: Transaccion[];
    depositar: () => void;
    transferir: (cantidad: number, receptor: string) => void;
}
