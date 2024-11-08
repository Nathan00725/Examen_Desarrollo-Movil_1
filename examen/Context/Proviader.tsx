import { createContext, useContext, useState, ReactNode } from "react";
import { Transaccion } from '../Interfaces/Transaccion';
import { ContextType } from '../Interfaces/registro';

export const Usuario_Context = createContext<ContextType>({
    dinero: 0,
    transacciones: [],
    depositar: () => {},
    transferir: () => false,
});

export const Usuario_Provider = ({ children }: { children: ReactNode }) => {
    const [dinero, setDinero] = useState(10000); // Sin la coma
    const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

    const depositar = () => {
        setDinero(dinero + 500);
        agregarTransaccion(`Depósito de L.500`);
    };

    const transferir = (cantidad: number, receptor: string): boolean => {
        if (!isNaN(cantidad) && isFinite(cantidad) && cantidad > 0 && cantidad <= dinero) {
            setDinero(dinero - cantidad);
            agregarTransaccion(`Transferencia a ${receptor}: L.${cantidad}`);
            return true;
        }
        return false;
    };

    const agregarTransaccion = (texto_usar: string) => {
        const nuevaTransaccion: Transaccion = {
            id: Date.now(),
            texto_usar
        };
        setTransacciones(prev => [nuevaTransaccion, ...prev].slice(0, 5));
    };

    return (
        <Usuario_Context.Provider value={{ dinero, transacciones, depositar, transferir }}>
            {children}
        </Usuario_Context.Provider>
    );
};

export const useCuenta = () => {
    const context = useContext(Usuario_Context);
    if (!context) {
        throw new Error('useCuenta debe ser utilizado dentro del CuentaProvider');
    }
    return context;
};
