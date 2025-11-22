
/**
 * Patron Singleton
 * 
 */
export default class Singleton {
    // se define la instancia estatica del tipo de la clase
    private static instance: Singleton;
    public version: string;

    // para un singleton es necesario un constructor privado
    private constructor( version: string) {
        this.version = version;
    }

    // a traves de los metodos estaticos no permitimos que se puedan crear nuevas instancias usando new 
    public static getInstance(version: string): Singleton {
        // se verifica si la instancia ya fue creada
        if (!Singleton.instance) {
            //  si no fue creada se crea
            Singleton.instance = new Singleton(version);
        }

        // se retorna la instancia
        return Singleton.instance;
    }

    public static updateVersion(version: string): Singleton {
        if (!Singleton.instance) {
            throw new Error('Singleton is not initialized');
        }
        Singleton.instance.version = version;
        return Singleton.instance;

    }

}
