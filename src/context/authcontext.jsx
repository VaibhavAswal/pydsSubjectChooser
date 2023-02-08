import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	useEffect(() => {
		const unsubsribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubsribe;
	}, []);

	const value = {
		currentUser,
		login,
		loading,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
