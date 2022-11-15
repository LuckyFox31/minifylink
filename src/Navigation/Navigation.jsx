// Layout
import Template from "../Layouts/Template.jsx";

// Pages
import Homepage from "../Pages/Homepage";

export const Navigation = [
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