interface ProfileHeaderProps {
	title: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title }) => (
	<header className="mt-10 mb-6">
		<h1 className="text-3xl font-semibold">{title}</h1>
	</header>
);

export default ProfileHeader;
