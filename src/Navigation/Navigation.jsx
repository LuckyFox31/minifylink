// Layout
import Template from "../Layouts/Template.jsx";

// Pages
import Homepage from "../Pages/Homepage";
import Redirection from "../Pages/Redirection";

export const Navigation = [
	{
		path: "/:link",
		element: <Redirection />
	},
	{
		path: "/",
		element: <Template />,
		children: [
			{
				index: true,
				element: <Homepage />
			}
		]
	}
]