import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, gql } from "@apollo/client";
import useAuthStore from "@/store/authStore";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { setCookie } from "nookies";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			access_token
			refresh_token
		}
	}
`;

export function LoginForm() {
	const router = useRouter();
	const setToken = useAuthStore((state) => state.setToken);
	const [email, setEmail] = useState("john@mail.com");
	const [password, setPassword] = useState("changeme");
	const [login] = useMutation(LOGIN_MUTATION);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const { data, errors } = await login({
				variables: { email, password },
			});

			console.log(data);

			if (errors) {
				console.error("GraphQL errors:", errors);
				return;
			}

			if (data) {
				const token = data.login.access_token;
				setToken(token);

				// Сохраняем токен в cookies
				setCookie(null, "auth-token", token, {
					maxAge: 30 * 24 * 60 * 60, // 30 дней
					path: "/",
				});

				router.push("/");
			}
		} catch (error) {
			console.error("ApolloError:", error);
		}
	};

	return (
		<Card className="w-full max-w-sm mx-auto mt-10">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<CardFooter>
						<Button type="submit" className="w-full">
							Sign in
						</Button>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
}
