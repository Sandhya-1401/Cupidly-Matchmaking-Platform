import TinderCard from "react-tinder-card";
import { useMatchStore } from "../store/useMatchStore";

const SwipeArea = () => {
	const { userProfiles, swipeRight, swipeLeft } = useMatchStore();

	const handleSwipe = (dir, user) => {
		if (dir === "right") swipeRight(user);
		else if (dir === "left") swipeLeft(user);
	};

	return (
		<div className='relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-[24rem] sm:h-[28rem] lg:h-[32rem]'>
			{userProfiles.map((user) => (
				<TinderCard
					className='absolute shadow-none touch-target'
					key={user._id}
					onSwipe={(dir) => handleSwipe(dir, user)}
					swipeRequirementType='position'
					swipeThreshold={80}
					preventSwipe={["up", "down"]}
				>
					<div className='card bg-white w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] select-none rounded-lg overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<figure className='px-3 sm:px-4 pt-3 sm:pt-4 h-3/4'>
							<img
								src={user.image || "/avatar.png"}
								alt={user.name}
								className='rounded-lg object-cover w-full h-full pointer-events-none'
							/>
						</figure>
						<div className='card-body bg-gradient-to-b from-white to-pink-50 p-3 sm:p-4'>
							<h2 className='card-title text-responsive-xl font-bold text-gray-900 truncate'>
								{user.name}, {user.age}
							</h2>
							<p className='text-responsive-sm text-gray-600 line-clamp-2'>{user.bio}</p>
						</div>
					</div>
				</TinderCard>
			))}
		</div>
	);
};
export default SwipeArea;



// import TinderCard from "react-tinder-card";
// import { useMatchStore } from "../store/useMatchStore";
// import "./SwipArea.css";
// import { Heart, X, Info } from "lucide-react";

// const SwipeArea = () => {
// 	const { userProfiles, swipeRight, swipeLeft } = useMatchStore();

// 	const handleSwipe = (dir, user) => {
// 		if (dir === "right") swipeRight(user);
// 		else if (dir === "left") swipeLeft(user);
// 	};

// 	return (
// 		<div className="swipe-container">
// 			{userProfiles.map((user, index) => (
// 				<TinderCard
// 					className="swipe-card"
// 					key={user._id || index}
// 					onSwipe={(dir) => handleSwipe(dir, user)}
// 					swipeRequirementType="position"
// 					swipeThreshold={100}
// 					preventSwipe={["up", "down"]}
// 				>
// 					<div className="profile-card">
// 						<div className="profile-img">
// 							<img
// 								src={user.image || "/avatar.png"}
// 								alt={user.name}
// 							/>
// 							{/* Gradient Overlay */}
// 							<div className="gradient-overlay"></div>

// 							{/* Floating Action Buttons */}
// 							<div className="swipe-actions">
// 								<button className="btn-swipe btn-left">
// 									<X size={28} />
// 								</button>
// 								<button className="btn-swipe btn-info">
// 									<Info size={26} />
// 								</button>
// 								<button className="btn-swipe btn-right">
// 									<Heart size={28} />
// 								</button>
// 							</div>
// 						</div>
// 						<div className="profile-info">
// 							<h2>
// 								{user.name}, <span>{user.age}</span>
// 							</h2>
// 							<p>{user.bio || "No bio available."}</p>
// 						</div>
// 					</div>
// 				</TinderCard>
// 			))}
// 		</div>
// 	);
// };

// export default SwipeArea;
