import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers";




// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  // {
  //   title: "Inbox",
  //   url: "#",
  //   icon: Inbox,
  // },
  // {
  //   title: "Calendar",
  //   url: "#",
  //   icon: Calendar,
  // },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
]

export async function AppSidebar() {
  const reqHeader = await headers();
  const session = await auth.api.getSession({
    headers: reqHeader,
  });

  const user = session?.user;
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
            <div className="p-4 border-t border-gray-700">
                <h3 className="text-sm font-semibold">User Info</h3>
                {user ? (
                    <div className="mt-2">
                        <p className="text-sm">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                ) : (
                    <p className="text-xs text-gray-400">Not logged in</p>
                )}
            </div>
        </aside>
    )}