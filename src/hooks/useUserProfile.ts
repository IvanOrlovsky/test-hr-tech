import { gql, useQuery } from "@apollo/client";
import useAuthStore from "@/store/authStore";

const MY_PROFILE_QUERY = gql`
	query {
		myProfile {
			id
			name
			avatar
		}
	}
`;

export const useUserProfile = () => {
	const { token } = useAuthStore();

	const { data, loading, error } = useQuery(MY_PROFILE_QUERY, {
		context: {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
		skip: !token, // Не отправляем запрос, если нет токена
	});

	return { data, loading, error };
};
