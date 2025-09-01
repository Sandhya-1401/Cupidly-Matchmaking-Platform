import TinderCard from "react-tinder-card";
import { useMatchStore } from "../store/useMatchStore";

const SwipeArea = () => {
	const { userProfiles, swipeRight, swipeLeft } = useMatchStore();

	const handleSwipe = (dir, user) => {
		if (dir === "right") swipeRight(user);
		else if (dir === "left") swipeLeft(user);
	};

	return (
		<div className='relative w-full max-w-sm h-[28rem]'>
			{userProfiles.map((user) => (
				<TinderCard
					className='absolute shadow-none'
					key={user._id}
					onSwipe={(dir) => handleSwipe(dir, user)}
					swipeRequirementType='position'
					swipeThreshold={100}
					preventSwipe={["up", "down"]}
				>
					<div
						className='card bg-white w-96 h-[28rem] select-none rounded-lg overflow-hidden border
					 border-gray-400'
					>
						<figure className='px-4 pt-4 h-3/4'>
							<img
								src={user.image || "/avatar.png"}
								alt={user.name}
								className='rounded-lg object-cover h-full pointer-events-none'
							/>
						</figure>
						<div className='card-body bg-gradient-to-b from-white to-pink-50'>
							<h2 className='card-title text-2xl text-gray-900'>
								{user.name}, {user.age}
							</h2>
							<p className='text-gray-600'>{user.bio}</p>
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
