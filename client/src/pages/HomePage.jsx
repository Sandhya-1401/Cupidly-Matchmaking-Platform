import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import { useMatchStore } from "../store/useMatchStore";
import { Frown } from "lucide-react";

import SwipeArea from "../components/SwipeArea";
import SwipeFeedback from "../components/SwipeFeedback";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
	const { isLoadingUserProfiles, getUserProfiles, userProfiles, subscribeToNewMatches, unsubscribeFromNewMatches } =
		useMatchStore();

	const { authUser } = useAuthStore();

	useEffect(() => {
		getUserProfiles();
	}, [getUserProfiles]);

	useEffect(() => {
		authUser && subscribeToNewMatches();

		return () => {
			unsubscribeFromNewMatches();
		};
	}, [subscribeToNewMatches, unsubscribeFromNewMatches, authUser]);

	return (
		<div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden'>
			<Sidebar />
			<div className='flex-grow flex flex-col overflow-hidden'>
				<Header />
				<main className='flex-grow flex flex-col gap-4 sm:gap-6 lg:gap-10 justify-center items-center p-2 sm:p-4 lg:p-6 relative overflow-hidden'>
					{userProfiles.length > 0 && !isLoadingUserProfiles && (
						<>
							<SwipeArea />
							<SwipeFeedback />
						</>
					)}

					{userProfiles.length === 0 && !isLoadingUserProfiles && <NoMoreProfiles />}

					{isLoadingUserProfiles && <LoadingUI />}
				</main>
			</div>
		</div>
	);
};
export default HomePage;

const NoMoreProfiles = () => (
	<div className='flex flex-col items-center justify-center h-full text-center p-4 sm:p-6 lg:p-8'>
		<Frown className='text-pink-400 mb-4 sm:mb-6' size={60} />
		<h2 className='text-responsive-2xl font-bold text-gray-800 mb-2 sm:mb-4'>Woah There, Speedy Fingers !!</h2>
		<p className='text-responsive-lg text-gray-600 mb-4 sm:mb-6 max-w-md'>Bro Are You OK ? Maybe it&apos;s Time to Touch Some Grass.</p>
	</div>
);

const LoadingUI = () => {
	return (
		<div className='relative w-full max-w-xs sm:max-w-sm h-[24rem] sm:h-[28rem]'>
			<div className='card bg-white w-full sm:w-96 h-[24rem] sm:h-[28rem] rounded-lg overflow-hidden border border-gray-200 shadow-sm'>
				<div className='px-3 sm:px-4 pt-3 sm:pt-4 h-3/4'>
					<div className='w-full h-full bg-gray-200 rounded-lg animate-pulse' />
				</div>
				<div className='card-body bg-gradient-to-b from-white to-pink-50 p-3 sm:p-4'>
					<div className='space-y-2'>
						<div className='h-5 sm:h-6 bg-gray-200 rounded w-3/4 animate-pulse' />
						<div className='h-3 sm:h-4 bg-gray-200 rounded w-1/2 animate-pulse' />
					</div>
				</div>
			</div>
		</div>
	);
};
