import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"




// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
    return (

        <aside className="w-64 bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-lg font-bold">Admin Menu</h2>
                <ul className="mt-2">
                    {items.map((item) => (
                        <li key={item.title}>
                            <a href={item.url} className="block py-2 hover:bg-gray-700">
                                <item.icon className="inline-block w-4 h-4 mr-2" />
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )}