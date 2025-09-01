import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { disconnectSocket, initializeSocket } from "../socket/socket.client";
console.log(axiosInstance);
export const useAuthStore = create((set) => ({
	authUser: null,
	checkingAuth: true,
	loading: false,

	signup: async (signupData) => {
	try {
		set({ loading: true });
		const res = await axiosInstance.post("/auth/signup", signupData);

		if (res.data && res.data.user) {
			set({ authUser: res.data.user });

			// socket initialize only if user exists
			if (res.data.user._id) {
				initializeSocket(res.data.user._id);
			}

			toast.success("Account Created Successfully...Voo..Hooo..😃");
		} else {
			toast.error("Signup successful but no user returned. Please login.");
		}
	} catch (error) {
		console.error(error); // debug ke liye
		toast.error(error.response?.data?.message || "Something Went Wrong..Oopss..");
	} finally {
		set({ loading: false });
	}
},

	login: async (loginData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/login", loginData);
			set({ authUser: res.data.user });
			if (res?.data?.user?._id) {
				initializeSocket(res.data.user._id);
			}
			toast.success("Logged in Successfully 😃");
		} catch (error) {
			toast.error(error.response.data.message || "Something Went Wrong..Oopss..");
		} finally {
			set({ loading: false });
		}
	},
	logout: async () => {
		try {
			const res = await axiosInstance.post("/auth/logout");
			disconnectSocket();
			if (res.status === 200) set({ authUser: null });
		} catch (error) {
			toast.error(error.response.data.message || "SSomething Went Wrong..Oopss..");
		}
	},
	checkAuth: async () => {
		try {
			const res = await axiosInstance.get("/auth/me");
			const user = res?.data?.user || null;
			if (user?._id) {
				initializeSocket(user._id);
			}
			set({ authUser: user });
		} catch (error) {
			set({ authUser: null });
			console.log(error);
		} finally {
			set({ checkingAuth: false });
		}
	},

	setAuthUser: (user) => set({ authUser: user }),
}));
