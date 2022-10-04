import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "@firebase/auth";
import {auth} from "../../firebase";
import {useRouter} from "next/router";

interface IAuth {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    error: string | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<IAuth>({
    user: null,
    signIn: async () => {
    },
    error: null,
    loading: false,
    logout: async () => {
    },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const router = useRouter();

    // Persisting the user
    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    setLoading(false);
                }
                setInitialLoading(false);
            }),
        [auth]
    );

    const signIn = async (email: string, password: string) => {
        setLoading(true);

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                router.push("/");
                setLoading(false);
            })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false));
    };

    const logout = async () => {
        setLoading(true);

        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false));
    };

    const memoedValue = useMemo(
        () => ({
            user,
            signIn,
            loading,
            error,
            logout,
        }),
        [user, loading]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {!initialLoading && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
