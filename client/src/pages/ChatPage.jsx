import { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { useAuthStore } from "../store/useAuthStore";
import { useMatchStore } from "../store/useMatchStore";
import { useMessageStore } from "../store/useMessageStore";
import { Link, useParams } from "react-router-dom";
import { Loader, UserX, Circle, Send, Smile } from "lucide-react";
import MessageInput from "../components/MessageInput";
import { motion } from "framer-motion";
import "./Auth.css";

const ChatPage = () => {
	const { getMyMatches, matches, isLoadingMyMatches } = useMatchStore();
	const { messages, getMessages, subscribeToMessages, unsubscribeFromMessages } = useMessageStore();
	const { authUser } = useAuthStore();
	const { id } = useParams();

	const messagesEndRef = useRef(null);
	const match = matches.find((m) => m?._id === id);

	useEffect(() => {
		if (authUser && id) {
			getMyMatches();
			getMessages(id);
			subscribeToMessages();
		}
		return () => {
			unsubscribeFromMessages();
		};
	}, [getMyMatches, authUser, getMessages, subscribeToMessages, unsubscribeFromMessages, id]);

	// Auto scroll to latest message
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	if (isLoadingMyMatches) return <LoadingMessagesUI />;
	if (!match) return <MatchNotFound />;

	return (
		<div className='flex flex-col h-screen h-[100dvh] bg-gradient-to-br from-pink-50 via-white to-pink-100'>
			<Header />

			{/* Chat Header */}
			<div className='flex items-center p-3 sm:p-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-md sticky top-0 z-10'>
				<img
					src={match.image || "/avatar.png"}
					className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-2 border-white mr-2 sm:mr-3'
				/>
				<div>
					<h2 className='text-responsive-lg font-semibold'>{match.name}</h2>
					<p className='text-responsive-sm flex items-center'>
						<Circle size={8} className='text-green-400 mr-1' /> Online now
					</p>
				</div>
			</div>

			{/* Chat Messages */}
			<div className='flex-grow overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3 custom-scrollbar'>
				{messages.length === 0 ? (
					<div className='flex flex-col items-center justify-center h-full text-gray-500'>
						<Smile size={48} className='text-pink-400 mb-2' />
						<p className='text-lg'>Say hello 👋 to {match.name}</p>
					</div>
				) : (
					messages.map((msg) => (
						<motion.div
							key={msg._id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className={`flex items-end ${
								msg.sender === authUser._id ? "justify-end" : "justify-start"
							}`}
						>
							{msg.sender !== authUser._id && (
								<img
									src={match.image || "/avatar.png"}
									className='w-8 h-8 rounded-full mr-2 border'
								/>
							)}
							<div
								className={`relative p-2 sm:p-3 rounded-2xl max-w-[280px] sm:max-w-xs lg:max-w-md shadow-sm ${
									msg.sender === authUser._id
										? "bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-br-none"
										: "bg-gray-200 text-gray-800 rounded-bl-none"
								}`}
							>
								{msg.content}
								<span className='block text-xs mt-1 opacity-70'>
									{new Date(msg.createdAt).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</span>
							</div>
						</motion.div>
					))
				)}
				<div ref={messagesEndRef}></div>
			</div>

			{/* Message Input */}
			<div className='bg-white p-3 border-t shadow-sm'>
				<MessageInput match={match} />
			</div>
		</div>
	);
};

export default ChatPage;

const MatchNotFound = () => (
	<div className='h-screen flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 bg-dot-pattern'>
		<div className='bg-white p-8 rounded-lg shadow-md text-center'>
			<UserX size={64} className='mx-auto text-pink-500 mb-4' />
			<h2 className='text-2xl font-semibold text-gray-800 mb-2'>Match Not Found</h2>
			<p className='text-gray-600'>Oops ! It Seems This Match Doesn&apos;t Exist or Has Been Removed.</p>
			<Link
				to='/'
				className='mt-6 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition'
			>
				Go Back To Home
			</Link>
		</div>
	</div>
);

const LoadingMessagesUI = () => (
	<div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
		<div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
			<Loader size={48} className='mx-auto text-pink-500 animate-spin mb-4' />
			<h2 className='text-xl font-semibold text-gray-800 mb-2'>Loading Chat...</h2>
			<p className='text-gray-500'>Fetching your conversation</p>
			<div className='mt-6 flex justify-center space-x-2'>
				<div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce'></div>
				<div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-150'></div>
				<div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-300'></div>
			</div>
		</div>
	</div>
);
