const NavigationBar: React.FC = () => (
	<nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
		<div className="text-xl font-semibold">HarmonyHR</div>
		<div className="flex gap-4">
			<a href="#" className="hover:underline">
				Home
			</a>
			<a href="#" className="hover:underline">
				My Info
			</a>
			<a href="#" className="hover:underline">
				People
			</a>
			<a href="#" className="hover:underline">
				Hiring
			</a>
			<a href="#" className="hover:underline">
				Reports
			</a>
			<a href="#" className="hover:underline">
				Files
			</a>
		</div>
		<div className="flex items-center gap-4">
			<button className="border border-black px-4 py-2 rounded-xl">
				Search
			</button>
			<img
				className="w-10 h-10 rounded-full"
				src="https://via.placeholder.com/38x38"
				alt="Profile"
			/>
		</div>
	</nav>
);

export default NavigationBar;
